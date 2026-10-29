import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateModal({ activeCert, onClose }) {
  return (
    <AnimatePresence>
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1a99] backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            className="relative max-w-xl w-full rounded-[4px] border-4 border-solid border-[#ffffff] bg-[#fbf8f0] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-solid border-[#c7d7ef] pb-3 mb-4">
              <div>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] tracking-[0.15em] text-[#c0392b] uppercase">
                  Verified Credential
                </span>
                <h3 className="font-['Instrument_Sans'] text-[20px] font-[600] text-[#1c1c1a]">
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-[2px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[12px] font-['IBM_Plex_Mono'] text-[#1c1c1a] hover:bg-white cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {activeCert.image ? (
              <div className="rounded-[2px] border border-solid border-[#c9c6b8] overflow-hidden mb-4 bg-white">
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="w-full h-auto max-h-[360px] object-contain"
                />
              </div>
            ) : (
              <div className="flex h-36 items-center justify-center rounded-[2px] bg-[#f3ecdc] mb-4 text-[#8a8a84] font-['IBM_Plex_Mono'] text-[12px]">
                Digital simulation verification badge
              </div>
            )}

            <p className="font-['IBM_Plex_Mono'] text-[12px] text-[#3a3a36] leading-[19px] mb-4">
              {activeCert.description}
            </p>

            <div className="flex items-center justify-between border-t border-solid border-[#c7d7ef] pt-3 text-[12px] font-['IBM_Plex_Mono']">
              <span className="text-[#8a8a84]">{activeCert.issuer} · {activeCert.date}</span>
              {activeCert.verifyUrl && (
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-[600] text-[#1f4fa3] underline hover:text-[#c0392b]"
                >
                  External Verification Link ↗
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

