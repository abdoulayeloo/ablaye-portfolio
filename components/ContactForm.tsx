import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { choix, contact } from "@/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log("E-mail envoyé avec succès :", result.text);
            setIsSent(true);
            setIsSubmitting(false);
            setSubmitted(true);
          },
          (error) => {
            console.error("Erreur lors de l'envoi de l'e-mail :", error.text);
            setIsSubmitting(false);
            setSubmitted(false);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
    >
      <h3 className="text-4xl text-accent">{contact.title}</h3>
      <p className="text-white/60">{contact.description}</p>
      {/* Champs d'entrée */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input type="text" placeholder="Prénom" name="prenom" />
        <Input type="text" placeholder="Nom" name="nom" />
        <Input type="email" placeholder="Email" name="email" />
        <Input type="text" placeholder="Téléphone" name="telephone" />
      </div>
      {/* Sélection du service */}
      <Select onValueChange={(value: string) => setSelectedService(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choisissez un service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Choisissez un service</SelectLabel>
            {choix.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <input type="hidden" name="service" value={selectedService} />
      {/* Zone de texte */}
      <Textarea
        className="h-[200px]"
        placeholder="Message ..."
        name="message"
      />
      <Button
        size="sm"
        className="max-w-fit"
        disabled={isSubmitting}

        type="submit"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
