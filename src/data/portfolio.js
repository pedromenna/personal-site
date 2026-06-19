export const profile = {
  name: "Pedro Menna",
  handle: "@pedromenna",
  location: "Brasil",
  // Troque para false se não estiver buscando novas oportunidades no momento.
  openToWork: true,
  socials: {
    github: "https://github.com/pedromenna",
    linkedin: "https://www.linkedin.com/in/pedro-menna-635762213",
    instagram: "https://instagram.com/pdromenna",
    email: "pedromenna15@gmail.com",
  },
  // Cole aqui o link do seu currículo (PDF, Google Drive, etc).
  // Enquanto estiver vazio, o botão "Baixar currículo" mostra um aviso.
  resumeUrl: "",
};

export const skills = [
  {
    title: { pt: "Linguagens", en: "Languages" },
    items: ["JavaScript", "Python", "TypeScript", "Shell Script"],
  },
  {
    title: { pt: "Frameworks & Runtimes", en: "Frameworks & Runtimes" },
    items: ["Node.js", "React"],
  },
  {
    title: { pt: "Cloud & Infraestrutura", en: "Cloud & Infrastructure" },
    items: ["AWS", "Azure", "Oracle Cloud (OCI)", "Kubernetes", "Terraform"],
  },
  {
    title: { pt: "CI/CD & DevOps", en: "CI/CD & DevOps" },
    items: ["GitHub Actions", "Azure DevOps", "Jenkins", "Linux", "Windows Server"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    logo: "https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    url: "https://www.credly.com/badges/ee7a6fc9-5127-403e-9331-49618aa5209a/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: "https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/8196b5c5-33c3-4367-823c-e527989c70ea/linked_in_profile",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    logo: "https://brm-workforce.oracle.com/pdf/certview/images/OCI2025CFCA.png",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=951B8417E46ED149D9903891A331A3F6EE8462FA4778F899ABCED2318000579A",
  },
];

export const typingWords = [
  "kubernetes",
  "terraform",
  "github actions",
  "aws",
  "azure devops",
  "cloud infrastructure",
];

// Adicione seus projetos aqui conforme for finalizando-os.
// Cada item segue este formato:
// {
//   title: "Nome do projeto",
//   description: { pt: "Descrição em português.", en: "Description in English." },
//   tags: ["Terraform", "AWS", "CI/CD"],
//   link: "https://...",                 // demo ou link externo (opcional)
//   repo: "https://github.com/...",      // repositório (opcional)
// }
// Enquanto este array estiver vazio, a página de Projetos mostra um estado
// "em construção" com link para o seu GitHub.
export const projects = [];
