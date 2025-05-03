import { motion } from "framer-motion";

interface ClientProps {
  name: string;
  logo: string;
}

const Clients = () => {
  // Lista de clientes con sus logos
  const clients: ClientProps[] = [
    {
      name: "Cooperativa Chorotega",
      logo: "/assets/clients/chorotega.png", // Logo real
    },
    {
      name: "Cooperativa ECOSABA",
      logo: "/assets/clients/client2.png", // Placeholder
    },
    {
      name: "Cooperativa Taulabé",
      logo: "/assets/clients/client3.png", // Placeholder
    },
    {
      name: "BANCOVI",
      logo: "/assets/clients/client4.png", // Placeholder
    },
    {
      name: "Unión de Cooperativas",
      logo: "/assets/clients/client5.png", // Placeholder
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#11385b] mb-4">
            Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-[#fec53a] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Instituciones financieras que confían en nuestra tecnología
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                {client.name === "Cooperativa Chorotega" ? (
                  <img src={client.logo} alt={client.name} className="w-full h-auto object-contain" />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-400">
                    {client.name.substring(0, 2)}
                  </div>
                )}
              </div>
              <h4 className="font-montserrat font-semibold text-center text-[#11385b]">
                {client.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
