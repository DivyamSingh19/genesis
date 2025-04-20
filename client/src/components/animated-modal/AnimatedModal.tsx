"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/AnimatedModal";

import { motion } from "motion/react";

export function GenesisPremiumButton() {
   
  const images = [
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
  ];
  
  return (
    <Modal>
      <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn relative overflow-hidden rounded-3xl px-6 py-3 font-medium shadow-lg transition-all duration-300">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Get Genesis Pro
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✨
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="bg-black text-gray-100 border border-gray-800">
          <h4 className="text-lg md:text-2xl text-gray-100 font-bold text-center mb-8">
            Unlock your{" "}
            <span className="px-2 py-1 rounded-md    text-gray-300">
              creative potential
            </span>{" "}
            with Genesis Premium! ✨
          </h4>
          <div className="flex justify-center items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-gray-900 border border-gray-800 shrink-0 overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt="genesis ai generated art"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                />
              </motion.div>
            ))}
          </div>
          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <div className="flex items-center justify-center">
              <SpeedIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                5x faster generation
              </span>
            </div>
            <div className="flex items-center justify-center">
              <ResolutionIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                Ultra HD resolution
              </span>
            </div>
            <div className="flex items-center justify-center">
              <StyleIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                150+ exclusive styles
              </span>
            </div>
            <div className="flex items-center justify-center">
              <PriorityIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                Priority rendering
              </span>
            </div>
            <div className="flex items-center justify-center">
              <CreditIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                Unlimited credits
              </span>
            </div>
            <div className="flex items-center justify-center">
              <ArtisticIcon className="mr-2 text-gray-400 h-5 w-5" />
              <span className="text-gray-300 text-sm">
                Advanced editing tools
              </span>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="gap-4 bg-black border-t border-gray-800">
          <button className="px-4 py-2 bg-gray-900 text-gray-300 border border-gray-800 rounded-xl text-sm w-32 hover:bg-gray-800 transition-colors">
            Maybe Later
          </button>
          <button className="bg-gray-100 text-black text-sm px-4 py-2 rounded-xl border border-gray-300 w-32 hover:bg-white transition-colors shadow-lg">
            Upgrade Now
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

// Icons
const SpeedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l3 0" />
      <path d="M12 3l0 3" />
      <path d="M7.8 7.8l-2.2 -2.2" />
      <path d="M16.2 7.8l2.2 -2.2" />
      <path d="M7.8 16.2l-2.2 2.2" />
      <path d="M12 12l5 5" />
    </svg>
  );
};

const StyleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
};

const ResolutionIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M12 12l-3 -3m6 6l-3 -3" />
    </svg>
  );
};

const PriorityIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </svg>
  );
};

const CreditIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
      <path d="M12 7v10" />
    </svg>
  );
};

const ArtisticIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
      <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
      <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
      <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
    </svg>
  );
};