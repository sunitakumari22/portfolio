import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("https://portfolio-yjwu.vercel.app/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      const result = await response.json();
      
      toast({
        title: "Message sent!",
        description: result.message || "Thank you for your message. I'll get back to you soon.",
      });
  
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/10 to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? Reach out and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Let's Collaborate
              </h3>
              <p className="text-lg text-muted-foreground">
                I'm currently available for freelance work and open to full-time opportunities. Feel free to reach out using any of these channels:
              </p>
            </div>
            
            <div className="space-y-6">
              <a 
                href="mailto:angelsunita2468@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl border border-muted bg-muted/20 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Me</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    angelsunita2468@gmail.com
                  </p>
                </div>
              </a>
              
              <a 
                href="https://github.com/sunitakumari22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-muted bg-muted/20 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    github.com/sunitakumari22
                  </p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/sunitakumari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-muted bg-muted/20 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/sunitakumari
                  </p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border border-muted bg-gradient-to-br from-background to-muted/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form and I'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="py-5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="py-5"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="How can I help you?" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-5"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-6 text-base font-medium mt-4"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}