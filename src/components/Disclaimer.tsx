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
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90%] xs:max-w-[95%] sm:max-w-lg mid:max-w-xl lg:max-w-2xl custom:max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-4 xs:p-5 sm:p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg max-h-[85vh] flex flex-col">
        <DialogHeader className="flex-none">
          <DialogTitle className="font-georgia text-center text-xl xs:text-2xl sm:text-2xl mid:text-3xl font-semibold mb-3 xs:mb-4 sm:mb-5 text-[#212424]">
            Disclaimer - Law Decoded
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto space-y-3 xs:space-y-4 sm:space-y-5 pr-2">
          <p className="font-inter text-[#212424] text-sm xs:text-base sm:text-base mid:text-lg leading-relaxed">
            The rules of the Bar Council of India prohibit law firms from
            soliciting work or advertising in any manner. By clicking on I
            AGREE, the user acknowledges that
          </p>
          <p className="font-inter text-[#212424] text-sm xs:text-base sm:text-base mid:text-lg leading-relaxed">
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
          className="w-full mt-3 xs:mt-4 sm:mt-5 bg-[#DD4826] hover:bg-[#c13d1f] text-white font-inter font-medium h-8 xs:h-9 sm:h-10 mid:h-11 lg:h-12 text-xs xs:text-sm sm:text-sm mid:text-base rounded-md transition-colors flex-none"
        >
          I agree
        </Button>
      </DialogContent>
    </Dialog>
  );
}
