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

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log("E-mail envoyé avec succès :", result.text);
            setIsSubmitting(false);
            setIsSent(true);
            // Réinitialiser le formulaire
            setFormData({
              prenom: "",
              nom: "",
              email: "",
              telephone: "",
              service: "",
              message: "",
            });
          },
          (error) => {
            console.error("Erreur lors de l'envoi de l'e-mail :", error.text);
            setIsSubmitting(false);
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

      {isSent && (
        <p className="text-green-500">
          Votre message a été envoyé avec succès !
        </p>
      )}

      {/* Champs d'entrée */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          type="text"
          placeholder="Prénom"
          name="prenom"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Nom"
          name="nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Téléphone"
          name="telephone"
          value={formData.telephone}
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
        />
      </div>

      {/* Sélection du service */}
      <Select
        value={formData.service}
        onValueChange={(value: string) =>
          setFormData({ ...formData, service: value })
        }
      >
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

      {/* Zone de texte */}
      <Textarea
        className="h-[200px]"
        placeholder="Message ..."
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      {/* Bouton d'envoi */}
      <Button
        size="sm"
        className="max-w-fit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
