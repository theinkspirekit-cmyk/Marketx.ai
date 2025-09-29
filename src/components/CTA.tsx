import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  business: z.string().trim().min(1, "Business type is required").max(200, "Business type must be less than 200 characters"),
  problem: z.string().trim().min(1, "Please describe your automation needs").max(1000, "Description must be less than 1000 characters")
});
const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    problem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validated = contactSchema.parse(formData);

      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Strategy Call Booked!",
        description: "We'll contact you within 24 hours to schedule your free automation strategy session."
      });
      setFormData({
        name: "",
        email: "",
        business: "",
        problem: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Please check your information",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="cta" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Let's Automate</span>
              <br />
              <span className="text-muted-foreground">Your Business Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book your free strategy call and discover which automations will save you the most time and money.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Free Strategy Call</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="mt-2 bg-card border-border text-foreground" placeholder="Your full name" required />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="mt-2 bg-card border-border text-foreground" placeholder="your@email.com" required />
                </div>

                <div>
                  <Label htmlFor="business" className="text-foreground">Business Type *</Label>
                  <Input id="business" value={formData.business} onChange={e => handleInputChange('business', e.target.value)} className="mt-2 bg-card border-border text-foreground" placeholder="E-commerce, Coaching, Agency, etc." required />
                </div>

                <div>
                  <Label htmlFor="problem" className="text-foreground">What Takes Most of Your Time? *</Label>
                  <textarea id="problem" value={formData.problem} onChange={e => handleInputChange('problem', e.target.value)} className="mt-2 w-full p-3 rounded-md bg-card border border-border text-foreground placeholder-muted-foreground resize-none" rows={4} placeholder="Describe your biggest time-consuming tasks..." required />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full btn-glow text-primary-foreground py-6 text-lg font-semibold">
                  {isSubmitting ? "Booking Your Call..." : "Book Free Strategy Call →"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  🔒 Your information is secure. We'll never share your details.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              

              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;