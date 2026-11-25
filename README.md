
# ✦ NEXO — Tu vida, tu historia, tu universo

**NEXO** es una aplicación web personal interactiva diseñada para registrar recuerdos, explorar etapas de vida, completar misiones reflexivas y conservar historias personales de forma privada.

Funciona como una **Single Page Application (SPA)** ligera sin dependencias externas: cada persona puede usar su propio espacio aislado en su navegador y exportar o restaurar su historial mediante archivos `.json`.

---

## Características principales

- **El Árbol de la Vida y Línea de Vida:** Recorrido visual e interactivo dividido en 6 etapas (*El origen*, *Los descubrimientos*, *Mi identidad*, *Mis sueños*, *La sabiduría* y *Mi legado*).
- **Gestión de recuerdos:** Creación, edición, eliminación y filtrado de recuerdos por etapa de vida.
- **Misiones y recompensas simbólicas:** Actividades opcionales organizadas por categoría (*Memoria*, *Descubrimiento*, *Aprendizaje* y *Sueños*) con insignias desbloqueables sin métricas competitivas.
- **Espacios personalizados mediante enlace:** Permite generar URLs únicas (`?id=...&nombre=...&subtitulo=...`) para entregar un espacio personalizado a familiares o usuarios individuales con almacenamiento aislado.
- **Panel de anfitrión (`?admin=1`):** Generador integrado de enlaces personalizados listos para compartir.
- **Respaldo portátil (`.json`):** Exportación e importación (en modo reemplazo o combinación) para conservar o migrar datos entre dispositivos.
- **Privacidad local:** Los datos se almacenan directamente en el navegador del usuario mediante `localStorage`.

---

Primera versión local de NEXO construida con HTML, CSS y JavaScript puro.

## Funciones incluidas
- Mapa conceptual del Árbol de la Vida.
- Seis etapas con ventanas de detalle.
- Misiones filtrables y marcables como completadas.
- Registro y eliminación de recuerdos.
- Insignias que se desbloquean según el progreso.
- Menú adaptable a móviles.

## Estructura del proyecto

```text
nexo_web/
├── index.html          # Estructura principal, vistas, onboarding y modal de etapas
├── css/
│   └── styles.css      # Estilos responsivos, variables de tema y diseño editorial
├── js/
│   └── app.js          # Lógica de estado, espacios aislados, filtros, respaldos y generador
├── img/                # Recursos visuales del árbol y las 6 etapas
└── README.md           # Documentación del proyecto