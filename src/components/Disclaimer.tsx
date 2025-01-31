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
      <DialogContent className="mx-4 xs:mx-6 sm:mx-0 max-w-[90%] xs:max-w-[95%] sm:max-w-xl mid:max-w-2xl p-4 xs:p-5 sm:p-6 bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl xs:text-2xl sm:text-3xl font-semibold text-center mb-4 xs:mb-5 sm:mb-6">
            Disclaimer - Law Decoded
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 xs:space-y-5 sm:space-y-6 text-gray-600">
          <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
            The rules of the Bar Council of India prohibit law firms from
            soliciting work or advertising in any manner. By clicking on I
            AGREE, the user acknowledges that
          </p>
          <p className="text-sm xs:text-base sm:text-lg leading-relaxed">
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
          className="w-full mt-4 xs:mt-5 sm:mt-6 bg-[#C84C35] hover:bg-[#B43D27] text-white py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg rounded"
        >
          I agree
        </Button>
      </DialogContent>
    </Dialog>
  );
}
