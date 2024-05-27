import { Card } from "app/components/molecules/index";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const VerifyYourEmailMessage = ({ email = "" }: { email?: string }) => {
  return (
    <Card className="max-w-2xl">
      <div className="flex flex-col p-6 text-center space-y-5">
        <EnvelopeIcon className="h-10" />
        <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">
          Verifica tu correo electrónico
        </h3>
        <p className="text-sm text-muted-foreground">
          Hemos enviado un enlace verificación a tu dirección de correo
          electrónico <b>{email}</b> haz clic en el enlace para acceder a tu
          cuenta.
        </p>
        <p className="text-sm text-muted-foreground">
          Si no has recibido un correo electrónico, revisa tu carpeta de spam.
        </p>
      </div>
      {/*       <div className="items-center p-6 flex flex-col gap-2">
        <Button type="button">Reenviar correo de verificación</Button>
      </div> */}
    </Card>
  );
};

export default VerifyYourEmailMessage;
