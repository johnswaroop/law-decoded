"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DisclaimerModal() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShowDisclaimer(false);
  };

  return (
    <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
      <DialogContent className="max-w-2xl p-6 bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center mb-6">
            Disclaimer - Law Decoded
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-gray-600">
          <p className="leading-relaxed">
            The rules of the Bar Council of India prohibit law firms from
            soliciting work or advertising in any manner. By clicking on I
            AGREE, the user acknowledges that
          </p>
          <p className="leading-relaxed">
            The user wishes to gain more information about Law Decoded, its
            practice areas and its attorneys, for his/her own information and
            use The information is made available/provided to the user only on
            his/her specific request and any information obtained or material
            downloaded from this website is completely at the user`s volition
            and any transmission, receipt or use of this site is not intended
            to, and will not, create any lawyer-client relationship and None of
            the information contained on the website is in the nature of a legal
            opinion or otherwise amounts to any legal advice.
          </p>
        </div>
        <Button
          onClick={handleAccept}
          className="w-full mt-6 bg-[#C84C35] hover:bg-[#B43D27] text-white py-4 rounded"
        >
          I agree
        </Button>
      </DialogContent>
    </Dialog>
  );
}
