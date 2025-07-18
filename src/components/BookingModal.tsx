
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Star, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: any;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const dates = [
  { date: "Today", day: "Dec 18", available: true },
  { date: "Tomorrow", day: "Dec 19", available: true },
  { date: "Thursday", day: "Dec 20", available: true },
  { date: "Friday", day: "Dec 21", available: false },
  { date: "Monday", day: "Dec 24", available: true },
];

const BookingModal = ({ isOpen, onClose, doctor }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time slot are required to book an appointment.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment with ${doctor?.name} is confirmed for ${selectedDate} at ${selectedTime}.`,
      });
      onClose();
      // Reset form
      setSelectedDate("");
      setSelectedTime("");
      setSymptoms("");
    }, 2000);
  };

  if (!doctor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-medical-primary" />
            <span>Book Appointment</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Doctor Info */}
          <Card className="border-medical-light">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-medical-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-medical-dark">{doctor.name}</CardTitle>
                  <CardDescription className="text-medical-primary font-semibold">
                    {doctor.specialization}
                  </CardDescription>
                  <div className="flex items-center mt-2 space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{doctor.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Date Selection */}
          <div>
            <Label className="text-base font-semibold text-medical-dark">Select Date</Label>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {dates.map((date) => (
                <Button
                  key={date.day}
                  variant={selectedDate === date.date ? "default" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center ${
                    selectedDate === date.date 
                      ? "bg-medical-primary border-medical-primary text-white" 
                      : "border-gray-300 hover:border-medical-primary"
                  } ${!date.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => date.available && setSelectedDate(date.date)}
                  disabled={!date.available}
                >
                  <span className="font-semibold">{date.date}</span>
                  <span className="text-sm">{date.day}</span>
                  {!date.available && <span className="text-xs">Unavailable</span>}
                </Button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <Label className="text-base font-semibold text-medical-dark">Select Time</Label>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={`p-3 ${
                    selectedTime === time 
                      ? "bg-medical-primary border-medical-primary text-white" 
                      : "border-gray-300 hover:border-medical-primary"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Symptoms/Reason */}
          <div>
            <Label htmlFor="symptoms" className="text-base font-semibold text-medical-dark">
              Reason for Visit (Optional)
            </Label>
            <Textarea
              id="symptoms"
              placeholder="Please describe your symptoms or reason for the appointment..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="mt-2 min-h-[100px] border-gray-300 focus:border-medical-primary"
            />
          </div>

          {/* Booking Summary */}
          {selectedDate && selectedTime && (
            <Card className="bg-medical-light border-medical-primary">
              <CardHeader>
                <CardTitle className="text-lg text-medical-dark">Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Doctor:</strong> {doctor.name}</p>
                  <p><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p><strong>Date:</strong> {selectedDate}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Location:</strong> {doctor.location}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              className="flex-1 bg-medical-primary hover:bg-medical-secondary"
              disabled={isLoading || !selectedDate || !selectedTime}
            >
              {isLoading ? "Booking..." : "Confirm Appointment"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
