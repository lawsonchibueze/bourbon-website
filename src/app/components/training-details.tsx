import Image from "next/image";

export default function TrainingDetails() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div className="space-y-6">
        <div className="relative overflow-hidden h-[420px]">
          <Image
            width={1448}
            height={1086}
            src="/assets/marine-training-simulator.png"
            alt="Marine personnel training in a bridge simulator"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Bourbon Training Center
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground">
            Marine Training and Competence Development
          </h3>
          <p className="font-medium text-foreground">
            Building Competence, Enhancing Safety, and Driving Operational Excellence
          </p>
          <p>
            At <strong className="text-foreground">Alpha Interoil</strong>, we are committed to developing highly competent, safety-conscious, and performance-driven marine professionals capable of meeting the demanding requirements of the offshore marine industry. Our Marine Training programme is designed to enhance crew competence, strengthen operational reliability, and promote a culture of continuous learning and operational excellence.
          </p>
          <p>
            Through a combination of practical deck and classroom training, simulator-based exercises, equipment familiarisation, and competency assessments, we equip our crew and personnel with the knowledge, technical skills, and confidence required to perform their duties safely and effectively in challenging offshore environments.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-4">
            Our Marine Training Capabilities
          </h3>
          <ul className="space-y-4">
            <li><strong className="text-foreground">Type C IMO Bridge Simulator Training:</strong> We deliver practical and live bridge simulator exercises for newly recruited and serving Captains, focusing on vessel manoeuvring, navigational decision-making, emergency response, bridge team management, and operational readiness.</li>
            <li><strong className="text-foreground">ECDIS Type-Specific Training:</strong> Our training includes familiarisation with the Furuno FMD-3200 Electronic Chart Display and Information System (ECDIS), supporting safe navigation, effective route planning, and the proper use of electronic navigation systems.</li>
            <li><strong className="text-foreground">Garmin Navigation Equipment Training:</strong> We provide practical familiarisation with Garmin navigation equipment to strengthen users&apos; understanding of system functions and their effective application during vessel operations.</li>
            <li><strong className="text-foreground">GPS Training:</strong> Our GPS training develops personnel competence in position fixing, waypoint management, route monitoring, and the effective use of satellite-based positioning systems.</li>
          </ul>
        </div>

        <details className="group">
          <summary className="inline-flex cursor-pointer list-none items-center justify-center bg-brand px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-brand-foreground transition-colors hover:bg-brand/90 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read More</span>
            <span className="hidden group-open:inline">Read Less</span>
          </summary>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Our Approach</h3>
              <p>
                We believe that effective marine training goes beyond theoretical knowledge. Our approach combines structured instruction with practical exercises, scenario-based learning, equipment familiarisation, and competency evaluation. Training outcomes are reviewed to identify areas for improvement and ensure that learning translates into safer and more reliable onboard performance.
              </p>
            </div>

            <p>
              By aligning our training activities with operational requirements, applicable maritime standards, client expectations, and industry best practices, Alpha Interoil continues to strengthen the competence of its marine workforce and support the delivery of dependable offshore marine services.
            </p>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Our Commitment</h3>
              <p>
                At Alpha Interoil, competence is a cornerstone of safe operations. We remain committed to investing in our people, improving technical capabilities, and promoting professional excellence to ensure that our personnel are prepared to meet operational challenges while protecting lives, assets, and the marine environment.
              </p>
            </div>

            <p className="font-serif text-xl text-foreground">
              Alpha Interoil &mdash; Developing Competence. Promoting Safety. Delivering Operational Excellence.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
