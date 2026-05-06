import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/content";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Thank you! Your message has been sent. We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              Have questions about our products or distribution services? Our team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Phone</p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email</p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Location</p>
                      <p className="text-lg font-medium text-slate-900">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl text-lg">
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageSquare size={20} /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <Input placeholder="Your Company" className="rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <Input placeholder="+90..." className="rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <Textarea placeholder="How can we help you?" className="rounded-xl min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-7 rounded-xl text-lg group">
                    Send Message <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin size={48} className="text-slate-400 mx-auto" />
            <p className="text-slate-500 font-medium">Interactive Map Placeholder - Mersin, Turkey</p>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102456.844124145!2d34.548444!3d36.812103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3a4d0e27ad7%3A0x6393fd05844543!2sMersin%2C%20Turkey!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          className="w-full h-full border-0 grayscale opacity-60"
          allowFullScreen 
          loading="lazy" 
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;