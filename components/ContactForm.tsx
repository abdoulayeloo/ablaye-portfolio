import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { choix, contact } from "@/data";
import { z } from "zod";
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

const formSchema = z.object({
  prenom: z.string().min(1, "Le prénom est requis"),
  nom: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(1, "Le message est requis"),
});

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
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    console.log("FormData:", formData);

    // Valider les données du formulaire
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      // Extraire les erreurs
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof FormData;
        fieldErrors[fieldName] = error.message;
      });
      console.log("Validation Errors:", fieldErrors);
      setErrors(fieldErrors);
      return;
    } else {
      // Pas d'erreur, on peut envoyer le formulaire
      setErrors({});
    }

    // Envoyer l'e-mail
    if (form.current) {
      setIsSubmitting(true);

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
        <div className="grid w-full grid-cols-1">
          <Input
            type="text"
            placeholder="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={(e) =>
              setFormData({ ...formData, prenom: e.target.value })
            }
            className={errors.prenom ? "border-red-500" : "w-full"}
          />
          {errors.prenom && (
            <p className="text-sm text-red-500">
              {errors.prenom}
            </p>
          )}
        </div>
        <div className="grid w-full grid-cols-1">
          <Input
            type="text"
            placeholder="Nom"
            name="nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className={errors.nom ? "border-red-500" : "w-full"}
          />
          {errors.nom && (
            <p className="text-sm text-red-500">
              {errors.nom}
            </p>
          )}
        </div>
        <div className="grid w-full grid-cols-1">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={errors.email ? "border-red-500" : "w-full"}
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div className="grid w-full grid-cols-1">
          <Input
            type="text"
            placeholder="Téléphone"
            name="telephone"
            value={formData.telephone}
            onChange={(e) =>
              setFormData({ ...formData, telephone: e.target.value })
            }
            className={errors.telephone ? "border-red-500" : "w-full"}
          />
          {errors.telephone && (
            <p className="text-sm text-red-500">
              {errors.telephone}
            </p>
          )}
        </div>
      </div>

      {/* Sélection du service */}
      <div>
        <Select
          value={formData.service}
          onValueChange={(value: string) =>
            setFormData({ ...formData, service: value })
          }
        >
          <SelectTrigger
            className={`w-full ${errors.service ? "border-red-500" : ""}`}
          >
            <SelectValue placeholder="Choisissez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choisissez un service</SelectLabel>
              {choix.map((item, index) => (
                <SelectItem key={index} value={item.title}>
                  {item.title}
                  <input type="hidden" name="service" value={item.title} />
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-red-500">{errors.service}</p>
        )}
      </div>

      {/* Zone de texte */}
      <div>
        <Textarea
          className={`h-[200px] ${errors.message ? "border-red-500" : ""}`}
          placeholder="Message ..."
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {errors.message && (
          <p className="text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

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
