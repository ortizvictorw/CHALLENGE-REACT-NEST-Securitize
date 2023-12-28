// WhatsAppService.ts

interface WhatsAppMessage {
  phoneNumber: string | undefined;
  message: string;
}

const WhatsAppService = {
  generateWhatsAppLink: ({ phoneNumber, message }: WhatsAppMessage) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return url;
  },
};

export default WhatsAppService;
