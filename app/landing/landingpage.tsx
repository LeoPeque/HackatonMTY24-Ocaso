"use client";
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function LandingPage() {
  const videoRef = useRef(null);

  const IPhoneImage = ({ src, alt, width, height, xOffset, yOffset }) => (
    <div style={{ transform: `translate(${xOffset}px, ${yOffset}px)` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
      />
    </div>
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background font-roboto">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="bg-orange-500 px-6 py-12 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto">
            <div className="max-w-3xl text-left space-y-4 md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">
                Mantén el control de tus préstamos con facilidad
              </h1>
              <p className="text-white text-lg mb-4">
                Nuestra aplicación facilita la aprobación automática de préstamos para estudiantes, permitiéndoles acceder al financiamiento de manera rápida y eficaz. Los estudiantes pueden usar una tarjeta de crédito virtual para gastar el monto del préstamo de manera rápida y segura, cubriendo sus necesidades académicas y personales con facilidad.
              </p>
              <div className="flex justify-start gap-100">
                <Link href="/homepage">
                  <Button className="red-button text-xl">
                    Regístrate Ahora
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <Image
                src="/upscaled-card.png"
                alt="Tarjeta Ampliada"
                width={3996}
                height={2228}
                className="rounded-xl"
                quality={100}
                style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <video
              ref={videoRef}
              src="/card-video.mp4"
              width="1200"
              height="675"
              muted
              loop
              playsInline
              className="rounded-xl w-full"
              style={{ aspectRatio: "1200/675", objectFit: "cover", boxShadow: 'none' }}
            >
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        </section>
        <section className="px-6 py-12 sm:px-8 md:px-12 lg:px-16 bg-[#FFF5D6]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold mb-4">
                ¿Por qué elegir nuestro servicio de préstamos estudiantiles?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Proceso de aprobación rápido y automático</li>
                <li>Tarjeta de crédito virtual para uso inmediato</li>
                <li>Términos flexibles adaptados a estudiantes</li>
                <li>Plataforma fácil de usar para gestionar tu préstamo</li>
                <li>Equipo de soporte dedicado para ayudarte</li>
              </ul>
              <p className="mt-4">
                Comienza tu viaje académico con tranquilidad financiera. Solicita ahora y experimenta el futuro del financiamiento estudiantil.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-3">
                Potenciando tu educación
              </h3>
              <p className="mb-4">
                En Ocaso, creemos que las limitaciones financieras no deberían restringir tus aspiraciones educativas. Nuestro innovador servicio de préstamos estudiantiles está diseñado para brindarte el apoyo que necesitas para concentrarte en tus estudios y alcanzar tus metas.
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Cómo funciona
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Solicita en línea en minutos</li>
                <li>Obtén aprobación instantánea</li>
                <li>Recibe tu tarjeta de crédito virtual</li>
                <li>Comienza a usar tus fondos para gastos educativos</li>
              </ol>
              <Button 
                className="red-button" 
                style={{ 
                  fontSize: '15px', 
                  fontFamily: 'Roboto',
                  position: 'relative',
                  top: '20px', // Adjust this value to move the button up or down
                }}
              >
                Solicitar Tarjeta
              </Button>
            </div>
          </div>
        </section>
        <section className="relative px-6 py-24 sm:px-8 md:px-12 lg:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto relative z-1">
            <h2 className="text-3xl font-bold text-center mb-12">
              Descarga nuestra aplicación móvil
            </h2>
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center">
                  <IPhoneImage
                    src="/iphone1.png"
                    alt="Proceso de Solicitud"
                    width={465}
                    height={450}
                    xOffset={15}
                    yOffset={0}
                  />
                  <p className="mt-4 text-center font-semibold"></p>
                </div>
                <div className="flex flex-col items-center">
                  <IPhoneImage
                    src="/iphone2.png"
                    alt="Gestión de Fondos"
                    width={305}
                    height={305}
                    xOffset={20}
                    yOffset={15}
                  />
                  <p className="mt-4 text-center font-semibold"></p>
                </div>
                <div className="flex flex-col items-center">
                  <IPhoneImage
                    src="/iphone3.png"
                    alt="Historias de Éxito"
                    width={520}
                    height={500}
                    xOffset={-10}
                    yOffset={5}
                  />
                  <p className="mt-4 text-center font-semibold"></p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <IPhoneImage
                    src="/downloadapp.png"
                    alt="Descargar App"
                    width={450}
                    height={400}
                    xOffset={0}
                    yOffset={0}
                  />
                  <p className="mt-4 text-center font-semibold"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/api/placeholder/800/600"
              alt="Fondo 1"
              layout="fill"
              objectFit="cover"
              className="absolute left-0 top-0 w-1/3 h-full opacity-10"
            />
            <Image
              src="/api/placeholder/800/600"
              alt="Fondo 2"
              layout="fill"
              objectFit="cover"
              className="absolute left-1/3 top-0 w-1/3 h-full opacity-10"
            />
            <Image
              src="/api/placeholder/800/600"
              alt="Fondo 3"
              layout="fill"
              objectFit="cover"
              className="absolute right-0 top-0 w-1/3 h-full opacity-10"
            />
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 border-t">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 ocaso. Todos los derechos reservados.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacidad
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Términos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </footer>
    </div>
  );
}