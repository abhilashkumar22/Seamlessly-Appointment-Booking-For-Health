
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Star, Users } from "lucide-react";
import { useState } from 'react';
import Header from "@/components/Header";
import BookingModal from "@/components/BookingModal";
import LoginModal from "@/components/LoginModal";

const DoctorProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const doctor = location.state?.doctor;

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-medical-light to-white">
        <Header onLoginClick={() => setIsLoginOpen(true)} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-medical-dark mb-4">Doctor not found</h1>
          <Button onClick={() => navigate('/')} className="bg-medical-primary hover:bg-medical-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    setIsBookingOpen(true);
  };

  const availableSlots = [
    "Today 9:00 AM", "Today 11:00 AM", "Today 2:00 PM", "Today 4:00 PM",
    "Tomorrow 9:00 AM", "Tomorrow 10:00 AM", "Tomorrow 2:00 PM", "Tomorrow 3:00 PM",
    "Day After 9:00 AM", "Day After 11:00 AM", "Day After 1:00 PM", "Day After 4:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-white">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-medical-primary hover:bg-medical-light"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Search
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Profile Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${doctor.image}?auto=format&fit=crop&w=200&h=200`}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-medical-dark">{doctor.name}</CardTitle>
                <CardDescription className="text-medical-primary font-semibold text-lg">
                  {doctor.specialization}
                </CardDescription>
                {doctor.popular && (
                  <Badge className="bg-orange-100 text-orange-800 w-fit mx-auto">Popular Doctor</Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-semibold">{doctor.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-medical-primary" />
                  <span className="text-gray-700">{doctor.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-medical-primary" />
                  <span className="text-gray-700">{doctor.contact}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-medical-primary" />
                  <span className={doctor.available ? "text-green-600" : "text-red-600"}>
                    {doctor.available ? "Available" : "Not Available"}
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <span className="text-sm text-gray-600 block mb-2">Next Available:</span>
                  <span className="font-semibold text-medical-primary">{doctor.nextSlot}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Doctor Details and Booking */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-dark">About Dr. {doctor.name.split(' ')[1]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Dr. {doctor.name.split(' ')[1]} is a highly experienced {doctor.specialization.toLowerCase()} specialist with {doctor.experience} of practice. 
                  Known for providing compassionate care and using the latest medical technologies, Dr. {doctor.name.split(' ')[1]} has helped thousands of patients 
                  achieve better health outcomes. Committed to patient education and preventive care, ensuring each patient receives personalized treatment plans.
                </p>
              </CardContent>
            </Card>

            {/* Specialization Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-dark">Specialization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Primary Specialization</h4>
                    <p className="text-gray-700">{doctor.specialization}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Experience Level</h4>
                    <p className="text-gray-700">Senior Consultant</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Consultation Fee</h4>
                    <p className="text-gray-700">₹800 - ₹1500</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Languages</h4>
                    <p className="text-gray-700">English, Hindi, Regional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Time Slots */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-dark flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-medical-primary" />
                  Available Time Slots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`text-sm ${
                        slot === doctor.nextSlot 
                          ? "border-medical-primary bg-medical-light text-medical-primary" 
                          : "border-gray-200 hover:border-medical-primary"
                      }`}
                      onClick={() => handleBookAppointment()}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-medical-dark">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Clinic Address</h4>
                    <p className="text-gray-700">
                      Healthcare Center, Medical District<br />
                      {doctor.location}, India - 400001
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Phone</h4>
                    <p className="text-gray-700">{doctor.contact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-primary mb-2">Working Hours</h4>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book Appointment Button */}
            <div className="sticky bottom-4 bg-white p-4 rounded-lg shadow-lg border">
              <Button 
                className="w-full bg-medical-primary hover:bg-medical-secondary text-white font-semibold py-3"
                onClick={handleBookAppointment}
                disabled={!doctor.available}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {doctor.available ? "Book Appointment Now" : "Currently Not Available"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        doctor={doctor}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default DoctorProfile;
