import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import { toast } from "sonner";
const Contact = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: MapPin,
    title: "Our Office",
    details: ["123 Healthcare Plaza", "Medical District", "New York, NY 10001"]
  }, {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["support@healthbook.com", "info@healthbook.com"]
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-medical-light to-white">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-6">
            Contact <span className="text-medical-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Need help with booking an appointment? 
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-dark">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="border-gray-200 focus:border-medical-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="border-gray-200 focus:border-medical-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What is this regarding?" required className="border-gray-200 focus:border-medical-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Please describe your inquiry in detail..." rows={6} required className="border-gray-200 focus:border-medical-primary resize-none" />
                </div>
                <Button type="submit" className="w-full bg-medical-primary hover:bg-medical-secondary text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => <Card key={index} className="border-gray-200 hover:border-medical-primary transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-medical-light rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-medical-primary" />
                    </div>
                    <CardTitle className="text-lg text-medical-dark">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>)}
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-medical-dark">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-medical-dark">How do I book an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simply search for doctors by specialization or location, select your preferred doctor, 
                  choose an available time slot, and confirm your booking. You'll receive a confirmation email immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-medical-dark">Can I reschedule my appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can reschedule your appointment up to 24 hours before the scheduled time. 
                  Log into your account and manage your appointments from your dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-medical-dark">Is my medical information secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely. We use industry-standard encryption and are fully HIPAA compliant. 
                  Your medical information is protected with the highest level of security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-medical-dark">What if I need to cancel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can cancel your appointment at any time through your account dashboard. 
                  We recommend giving at least 2 hours notice to avoid any cancellation fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center bg-medical-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">Need Immediate Help?</h3>
          <p className="text-gray-600 mb-6">
            For urgent medical concerns, please contact emergency services. 
            For technical support, our team is available during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white">
              Emergency: 911
            </Button>
            <Button className="bg-medical-primary hover:bg-medical-secondary text-white">Technical Support: 108
          </Button>
          </div>
        </div>
      </section>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>;
};
export default Contact;