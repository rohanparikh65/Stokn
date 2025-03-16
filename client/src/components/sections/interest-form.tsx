import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInterestedUserSchema, type InsertInterestedUser } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";

export default function InterestForm() {
  const { toast } = useToast();

  // ✅ Initialize form with validation
  const form = useForm<InsertInterestedUser>({
    resolver: zodResolver(insertInterestedUserSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // ✅ Define the mutation function to send data to the backend API
  const mutation = useMutation({
    mutationFn: async (data: InsertInterestedUser) => {
      const requestData = {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message?.trim() || "",
      };

      console.log("✅ Sending Request Data:", requestData); // Debugging log

      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("❌ [ERROR] Submission Failed:", errorResponse);
        throw new Error(errorResponse.error || "Failed to submit form");
      }
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Something went wrong: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Join the Future of Sneaker Trading
          </h2>
          <p className="text-xl text-gray-400">
            Interested in being part of the revolution? Let us know and we'll keep you updated.
          </p>
        </motion.div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
            {/* ✅ Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className="bg-purple-900/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" className="bg-purple-900/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ Message Field (Optional) */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what interests you about Stokn"
                      className="bg-purple-900/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit Interest"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
