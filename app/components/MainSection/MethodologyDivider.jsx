import React from "react";
import * as motion from "motion/react-client";
import { ZoomIn, BadgeCheck, OctagonAlert } from "lucide-react";

const MethodologyDivider = () => {
  return (
    <section className="dk:text-white px-8 md:px-32 pt-12">
      <div className="grid md:grid-cols-3 gap-6 py-20 px-6 max-w-6xl mx-auto text-center">
        {[
          {
            title: "Detectamos",
            desc: "Auditamos vulnerabilidades, analizamos entornos y situaciones.",
            icon: <ZoomIn />,
          },
          {
            title: "Prevenimos",
            desc: "Diseñamos un sistema de seguridad preventivo, personalizado.",
            icon: <OctagonAlert />,
          },
          {
            title: "Solucionamos",
            desc: "Respondemos, intervenimos y mejoramos constantemente.",
            icon: <BadgeCheck />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-muted/10"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MethodologyDivider;
