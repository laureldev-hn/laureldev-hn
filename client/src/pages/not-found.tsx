import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-4 border-none shadow-lg">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="h-16 w-16 text-accent mb-4" />
              <h1 className="text-3xl font-bold text-secondary mb-4">Página No Encontrada</h1>
              <p className="mt-2 mb-6 text-gray-600">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <Link href="/">
                <Button className="bg-secondary hover:bg-accent text-white font-medium py-2 px-6 rounded-full transition-all flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
