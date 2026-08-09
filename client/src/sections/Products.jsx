import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";
import products from "../data/projects.json";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id="products" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Products"
          title="Reliable products built for modern growers."
          description="Browse our premium catalog of dependable inputs and equipment designed for growth."
          centered
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-[#550000]">
                  {product.name}
                </h3>
                <p className="mt-3 text-slate-600">{product.description}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-6 inline-flex items-center font-semibold text-[#550000]"
                >
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
