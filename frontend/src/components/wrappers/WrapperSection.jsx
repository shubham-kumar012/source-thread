import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}