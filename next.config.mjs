/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("src/i18n/index.ts");

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};
export default withNextIntl(nextConfig);
