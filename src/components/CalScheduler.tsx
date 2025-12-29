import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";

interface CalSchedulerProps {
  calLink?: string;
  children: React.ReactNode;
}

const CalScheduler = ({ calLink, children }: CalSchedulerProps) => {
  const [customLink, setCustomLink] = useState(calLink || "");
  const [isOpen, setIsOpen] = useState(false);

  const embedUrl = customLink
    ? `https://cal.com/${customLink.replace("https://cal.com/", "")}?embed=true&theme=dark`
    : "";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule a Call
          </DialogTitle>
        </DialogHeader>
        {!embedUrl ? (
          <div className="space-y-4 py-4">
            <p className="text-muted-foreground">
              Enter your Cal.com booking link to enable scheduling.
            </p>
            <div className="space-y-2">
              <Label htmlFor="cal-link">Cal.com Link</Label>
              <Input
                id="cal-link"
                placeholder="your-username/meeting-type"
                value={customLink}
                onChange={(e) => setCustomLink(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Example: john-doe/30min or https://cal.com/john-doe/30min
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              title="Schedule a call"
              allow="camera; microphone"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CalScheduler;
