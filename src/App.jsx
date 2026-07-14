import React, { useState } from 'react';
import megaPackImg from './assets/products/mega-pack.webp';
import capacitacionesImg from './assets/products/capacitaciones.webp';
import auditoriasImg from './assets/products/auditorias.webp';
import inspeccionesImg from './assets/products/inspecciones.webp';
import programasSeguridadImg from './assets/products/programas-seguridad.webp';
import emergenciasImg from './assets/products/emergencias.webp';

export default function CatalogoProductosProfesional() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Sistema Maestro Higiene y Seguridad Blindada",
      category: "Premium",
      description: "Acceso a todo el ecosistema de sistemas de Higiene y Seguridad. La solución total para profesionales que buscan excelencia operativa y blindaje legal total.",
      fullDescription: "El bundle ultimate. Todos los sistemas integrados + actualizaciones legales anuales + acceso a comunidad de profesionales + webinars de perfeccionamiento. Una inversión única para convertirte en referente de tu industria.",
      url: "https://sistemamaestrohys.tupuntodigital.shop/",
      mockupGradient: "linear-gradient(135deg, #0d7fbf 0%, #0a5f99 100%)",
      icon: "👑",
      image: megaPackImg
    },
    {
      id: 2,
      title: "SISTEMA MAESTRO DE CAPACITACIONES",
      category: "Capacitación",
      description: "Biblioteca profesional de capacitaciones lista para implementar. Más de 120 capacitaciones con certificados, presentaciones y material de apoyo editable.",
      fullDescription: "Todo el material de capacitación que necesitás, listo para dictar. +120 capacitaciones (trabajo en altura, EPP, prevención de incendios, primeros auxiliares, riesgo eléctrico, sustancias químicas y más), presentaciones en diapositivas, certificados editables y planillas de registro.",
      url: "#",
      mockupGradient: "linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)",
      icon: "🎓",
      image: capacitacionesImg
    },
    {
      id: 3,
      title: "Sistema Maestro de Auditorías",
      category: "Auditorías",
      description: "Sistema completo para ejecutar auditorías internas de alto impacto. Checklist de 100+ puntos, redacción de hallazgos técnicos y seguimiento de no-conformidades.",
      fullDescription: "Metodología de auditoría con rigor y autoridad. Planificación de auditorías, matriz de auditoría integrada, redacción de hallazgos técnicos vs. mediocres, plan de acciones correctivas y trazabilidad de cierre.",
      url: "https://maestrodeauditor.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
      icon: "✓",
      image: auditoriasImg
    },
    {
      id: 4,
      title: "Sistema Maestro de Inspecciones",
      category: "Control de Campo",
      description: "Protocolo profesional de inspecciones de seguridad con enfoque técnico. Checklist dinámicos, redacción de desvíos y evidencia fotográfica documentada.",
      fullDescription: "De patrullas informales a inspecciones sistemáticas. Diseño de checklist por riesgo, entrenamiento de inspectores, redacción profesional de desvíos con fotoevidencia, seguimiento de acciones y reportes para la gerencia.",
      url: "https://maestrodeinspecciones.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🔎",
      image: inspeccionesImg
    },
    {
      id: 5,
      title: "Sistema Maestro de Programas de Seguridad",
      category: "Documentación",
      description: "Metodología de ingeniería documental para redactar programas de seguridad blindados legalmente. Estructura profunda de 100+ páginas, matriz de riesgos integrada y 5 bonos operativos.",
      fullDescription: "El programa de seguridad es tu seguro de vida legal. Este sistema convierte documentos genéricos en instrumentos técnicos profesionales que resisten inspecciones de la SRT/ART. Incluye filosofía de blindaje, diagnóstico de escena, ingeniería de redacción, PTS críticos y protocolo de firmas.",
      url: "https://programasdeseguridad.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "📋",
      image: programasSeguridadImg
    },
    {
      id: 6,
      title: "Sistema Maestro de Emergencias",
      category: "Planes de Acción",
      description: "Convierte tu plan de evacuación en un sistema operativo real. Diseño de medidas de protección, brigadas definidas, simulacros auditables y documentación de crisis.",
      fullDescription: "De la teoría del PDF a la práctica en el terreno. Este sistema integra análisis de amenazas, procedimientos de respuesta, gestión de instalaciones contra incendio, primeros auxilios y evidence trail para auditorías.",
      url: "https://maestrodeemergencias.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🚨",
      image: emergenciasImg
    },
    {
      id: 7,
      title: "Sistema maestro Investigacion de Accidentes",
      category: "Análisis Forense",
      description: "Metodología de ingeniería forense para recolectar evidencia, encontrar causas raíz y cerrar el ciclo preventivo. Protocolo de respuesta inmediata, entrevistas profesionales y redacción de informes impecables.",
      fullDescription: "De buscar culpables a buscar soluciones de sistema. Protocolo de respuesta inmediata (primeros 60 minutos), recolección de evidencia forense, análisis de causas (Árbol, 5 Porqués), acciones correctivas y preparación pericial ante demandas.",
      url: "https://investigaciondeaccidentes.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🔍"
    },
    {
      id: 8,
      title: "Sistema maestro de Matrices",
      category: "Datos & Control",
      description: "El cerebro inteligente de tu gestión. Matrices interconectadas para IPER, EPP, capacitación, requisitos legales y acciones correctivas. Convierte datos sueltos en decisiones técnicas auditables.",
      fullDescription: "Una sola fuente de verdad. Matrices automatizadas en Excel con formatos condicionales, interconexiones lógicas y dashboards de control. Banco de +150 peligros/riesgos, selector inteligente de EPP y auditoría de trazabilidad.",
      url: "https://maestrodematrices.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "📊"
    },
    {
      id: 9,
      title: "Sistema maestro de Consultores",
      category: "Negocio & Escalado",
      description: "De técnico independiente a consultor de alto valor. Sistema comercial, propuestas high-ticket, gestión de clientes eficiente y estrategia de negocio para escalar.",
      fullDescription: "Business coaching para prevencionistas. Posicionamiento de nicho, arquitectura de propuestas que cierren, onboarding profesional, CRM de clientes, cálculo de honorarios y escalado operativo. Cobra por sistemas, no por horas.",
      url: "https://maestroconsultores.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: "💼"
    },
    {
      id: 10,
      title: "Sistema maestro Operativo",
      category: "All-In-One",
      description: "La integración completa de los 9 sistemas anteriores. Una central de mando unificada, infraestructura documental blindada y protocolos operativos interconectados.",
      fullDescription: "Windows de la Higiene y Seguridad. Carpeta maestra de estructura digital, master-dashboard de KPIs, protocolo de onboarding para nuevas empresas, kit de supervivencia ante auditorías y acceso a actualizaciones legales anuales. Zero papel innecesario, 100% evidencia legal.",
      url: "https://operativohys.tupuntodigital.shop",
      mockupGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "⚙️"
    }
  ];

  if (selectedProduct) {
    const product = products.find(p => p.id === selectedProduct);
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #eef2f5 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              background: 'white',
              border: '1px solid #e0e6ed',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#2c3e50',
              marginBottom: '2rem',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#f8f9fa';
              e.target.style.borderColor = '#0d7fbf';
              e.target.style.color = '#0d7fbf';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'white';
              e.target.style.borderColor = '#e0e6ed';
              e.target.style.color = '#2c3e50';
            }}
          >
            ← Volver al catálogo
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Mockup del Producto */}
            <div>
              <div
                style={{
                  background: product.image ? '#f0f2f5' : product.mockupGradient,
                  borderRadius: '12px',
                  height: '560px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  animation: 'fadeIn 0.5s ease-out',
                  position: 'relative',
                  overflow: 'visible',
                  padding: product.image ? '0.5rem' : '2rem'
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <>
                    <div style={{ fontSize: '80px', marginBottom: '1rem', opacity: 0.9 }}>
                      {product.icon}
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, textAlign: 'center', margin: '0 0 1rem', lineHeight: '1.3', textTransform: 'uppercase' }}>
                      {product.title}
                    </h2>
                    <p style={{ fontSize: '14px', opacity: 0.95, textAlign: 'center', marginBottom: 0, maxWidth: '80%' }}>
                      Sistema Profesional Integrado
                    </p>

                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0.2, fontSize: '60px' }}>
                      📋
                    </div>
                  </>
                )}

                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '16px',
                    background: 'white',
                    color: '#0d7fbf',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.18)'
                  }}
                >
                  {product.category}
                </span>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#2c3e50', margin: 0, lineHeight: '1.6' }}>
                  Acceso de por vida con actualizaciones incluidas
                </p>
              </div>
            </div>

            {/* Información */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#0d7fbf', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.5rem', fontWeight: 600 }}>
                  Producto Profesional
                </p>
                <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1rem', color: '#2c3e50', lineHeight: '1.3', textTransform: 'uppercase' }}>
                  {product.title}
                </h1>
                <p style={{ color: '#34495e', lineHeight: '1.8', marginBottom: '2rem', fontSize: '16px' }}>
                  {product.fullDescription}
                </p>
              </div>

              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f0f7ff', borderRadius: '8px' }}>
                <h3 style={{ color: '#0d7fbf', fontSize: '14px', fontWeight: 600, margin: '0 0 1rem', textTransform: 'uppercase' }}>
                  Qué incluye
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  <li style={{ color: '#34495e', fontSize: '14px', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#0d7fbf', fontWeight: 700 }}>✓</span> 100+ páginas de contenido técnico
                  </li>
                  <li style={{ color: '#34495e', fontSize: '14px', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#0d7fbf', fontWeight: 700 }}>✓</span> Plantillas y bonos operativos
                  </li>
                  <li style={{ color: '#34495e', fontSize: '14px', margin: '0 0 0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#0d7fbf', fontWeight: 700 }}>✓</span> Ejemplos prácticos y casos de estudio
                  </li>
                  <li style={{ color: '#34495e', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#0d7fbf', fontWeight: 700 }}>✓</span> Actualizaciones anuales incluidas
                  </li>
                </ul>
              </div>

              <div style={{ display: 'grid', gap: '12px' }}>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: product.mockupGradient,
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    display: 'block',
                    boxShadow: '0 4px 12px rgba(13, 127, 191, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(13, 127, 191, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(13, 127, 191, 0.3)';
                  }}
                >
                  Acceder al Producto →
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #eef2f5 100%)' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #e0e6ed', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '48px',
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-1px',
              lineHeight: 1.15,
              background: 'linear-gradient(135deg, #0d7fbf 0%, #667eea 60%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ecosistema de Sistemas
          </h1>
          <p
            style={{
              color: '#7f8c8d',
              margin: '0.75rem auto 0',
              maxWidth: '560px',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '0.2px',
              lineHeight: 1.5,
            }}
          >
            Soluciones profesionales e integradas para Higiene y Seguridad Ocupacional
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              style={{
                cursor: 'pointer',
                background: 'white',
                borderRadius: '12px',
                overflow: 'visible',
                border: '1px solid #e0e6ed',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: 'translateY(0)',
                animation: `slideUp 0.5s ease-out ${product.id * 40}ms both`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(13, 127, 191, 0.18)';
                e.currentTarget.style.borderColor = '#0d7fbf';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#e0e6ed';
              }}
            >
              <div
                style={{
                  background: product.image ? '#f0f2f5' : product.mockupGradient,
                  height: '280px',
                  borderRadius: '12px 12px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, borderRadius: '12px 12px 0 0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '0.35rem' }}
                    />
                  ) : (
                    <>
                      <div style={{ fontSize: '60px', marginBottom: '0.5rem', opacity: 0.95 }}>
                        {product.icon}
                      </div>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Sistema Profesional
                      </p>

                      <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '40px', opacity: 0.15 }}>
                        {product.icon}
                      </div>
                    </>
                  )}
                </div>

                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '16px',
                    background: 'white',
                    color: '#0d7fbf',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                    zIndex: 1
                  }}
                >
                  {product.category}
                </span>
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 1rem', color: '#2c3e50', lineHeight: '1.4', textTransform: 'uppercase' }}>
                  {product.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#7f8c8d', margin: '0 0 1.5rem', lineHeight: '1.6', flex: 1 }}>
                  {product.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #e0e6ed' }}>
                  <span style={{ fontSize: '12px', color: '#95a5a6', textTransform: 'uppercase', fontWeight: 600 }}>
                    Ver detalles
                  </span>
                  <span style={{ fontSize: '18px', transition: 'transform 0.2s', color: '#0d7fbf' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'white', borderTop: '1px solid #e0e6ed', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
          <p style={{ color: '#7f8c8d', margin: '0 0 0.5rem' }}>
            © 2024 Sistema Maestro HyS. Todos los derechos reservados.
          </p>
          <p style={{ color: '#95a5a6', fontSize: '14px', margin: 0 }}>
            Soluciones profesionales en Higiene y Seguridad Ocupacional
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
