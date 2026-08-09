import productsData from "../data/projects.json";
import { useParams, Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProductsDetailPage() {
  const { id } = useParams();

  const product = productsData.projects.find(
    (product) => product.id === id
  );

  if (!product) {
    return (
      <div className="mt-20 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Product Not Found
        </h1>

        <p className="text-lg">
          The product you are looking for does not exist.
        </p>

        <Link
          to="/products"
          className="text-blue-500 hover:underline"
        >
          Go back to the products page
        </Link>
      </div>
    );
  }

  return (
    <section id="products" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          title={id
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ")
          }
          centered
        />

        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {product.projects.map((project, index) => (
            <motion.article
              key={`${product.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-48 w-full object-cover"
              />

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#550000]">
                  {project.eyebrow}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#550000]">
                  {project.name}
                </h3>

                <p className="mt-3 text-slate-600">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}