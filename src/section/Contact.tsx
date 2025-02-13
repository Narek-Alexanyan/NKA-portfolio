import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Input } from "../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ArrowUp } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Narek Aleksanyan",
          from_email: data.email,
          to_email: "narek.aleksanyan.27@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for your message", {
        icon: "😃",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      reset();
    } catch (e) {
      toast.error("I didn't receive your message", {
        icon: "😢",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-nka--white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col space-y-7"
          >
            <Input
              id="name"
              required
              label="Full Name"
              placeholder="ex., John Doe"
              error={errors.email?.message}
              {...register("name")}
            />

            <Input
              id="email"
              required
              label="Email address"
              placeholder="ex., johndoe@gmail.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                id="message"
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                {...register("message")}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <ArrowUp color="#FFF" />
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </section>
  );
};
