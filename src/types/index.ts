export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
