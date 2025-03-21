import { ContactInfoItem } from "@/components/ui/contact-info-item"
import { ScheduleItem } from "@/components/ui/schedule-item"
import ContactForm from "@/components/contact-form"
import { CONTACT_INFO, SCHEDULE } from "@/lib/constants"

export default function ContactSection() {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to Start?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Complete the form and we will contact you to provide all the information you need.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, index) => (
                  <ContactInfoItem key={index} icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                {SCHEDULE.map((item, index) => (
                  <ScheduleItem key={index} day={item.day} hours={item.hours} />
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

