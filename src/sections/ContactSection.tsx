import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to start?"
          description="Replace this text with your real contact message, business email, phone number, or contact form."
        />

        <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-8 text-slate-950 shadow-sm">
          <form className="grid gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 focus:ring-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 focus:ring-2"
                placeholder="How can we help?"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;