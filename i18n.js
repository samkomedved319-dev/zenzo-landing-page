(() => {
  'use strict';

  const STORAGE_KEY = 'zenzo-language';
  const languageNames = { en: 'ES', es: 'EN' };
  const titles = {
    'Zenzo Beta — Your AI team, in one workspace': 'Zenzo Beta — Tu equipo de IA, en un solo espacio',
    'About Zenzo — A clearer workspace for AI teamwork': 'Acerca de Zenzo — Un espacio más claro para el trabajo en equipo con IA',
    'Zenzo Docs — Product overview and trust guide': 'Documentación de Zenzo — Guía del producto y confianza',
    'Zenzo Trust Center — Recognize official Zenzo pages': 'Centro de confianza de Zenzo — Reconoce las páginas oficiales',
    'Zenzo Privacy Policy — Draft for Zenzo Beta': 'Política de privacidad de Zenzo — Borrador para Zenzo Beta',
    'Zenzo Terms of Use — Draft for Zenzo Beta': 'Términos de uso de Zenzo — Borrador para Zenzo Beta',
    'Zenzo — Human review notice': 'Zenzo — Aviso de revisión humana',
    'Request early access — Zenzo Beta': 'Solicita acceso anticipado — Zenzo Beta'
  };

  const es = {
    'About': 'Acerca de',
    'Docs': 'Documentación',
    'Trust': 'Confianza',
    'Privacy': 'Privacidad',
    'Terms': 'Términos',
    'Human review': 'Revisión humana',
    'Home': 'Inicio',
    'Source': 'Código',
    'GitHub': 'GitHub',
    'Live demo': 'Demo en vivo',
    'Read the docs': 'Leer la documentación',
    'Join the beta': 'Únete a la beta',
    'Return home': 'Volver al inicio',
    'Open early-access form': 'Abrir formulario de acceso',
    'Request early access': 'Solicitar acceso anticipado',
    'How to verify links': 'Cómo verificar enlaces',
    'Explore the workspace': 'Explorar el espacio',
    'View the official source': 'Ver el código oficial',
    'Read the trust notes': 'Leer las notas de confianza',
    'Skip to content': 'Saltar al contenido',
    'ZENZO': 'ZENZO',
    'Zenzo Beta · Early access is open': 'Zenzo Beta · Acceso anticipado disponible',
    'Run the work. Keep the': 'Dirige el trabajo. Conserva el',
    'judgment.': 'criterio.',
    'Zenzo gives early teams a shared command center for agent squads, connected tools, and local workflows — so complex work stays visible, grounded, and moving.': 'Zenzo ofrece a los equipos iniciales un centro de mando compartido para escuadras de agentes, herramientas conectadas y flujos locales, para que el trabajo complejo siga siendo visible, fundamentado y avance.',
    'Preview the workspace': 'Vista previa del espacio',
    'Limited early cohort': 'Cohorte inicial limitada',
    'Direct product feedback': 'Comentarios directos sobre el producto',
    'Early workflow access': 'Acceso temprano a flujos',
    'Zenzo public pages never ask for account passwords. The early-access request opens a clearly labeled Google Form.': 'Las páginas públicas de Zenzo nunca solicitan contraseñas. La solicitud de acceso anticipado abre un formulario de Google claramente identificado.',
    'Zenzo public pages never ask for account passwords. Early-access requests are sent privately to Zenzo staff for review.': 'Las páginas públicas de Zenzo nunca solicitan contraseñas. Las solicitudes de acceso anticipado se envían en privado al equipo de Zenzo para su revisión.',
    'Learn how to verify official Zenzo links.': 'Aprende a verificar los enlaces oficiales de Zenzo.',
    '3 agents online': '3 agentes en línea',
    'Product launch': 'Lanzamiento de producto',
    'Product': 'Producto',
    'Engineering': 'Ingeniería',
    'Build': 'Compilar',
    'Growth ops': 'Operaciones de crecimiento',
    'Growth': 'Crecimiento',
    'squad broadcast enabled': 'emisión de escuadra activada',
    'Workstream status': 'Estado del flujo de trabajo',
    'Audience research': 'Investigación de audiencia',
    'Launch assets': 'Activos de lanzamiento',
    'QA checklist': 'Lista de control de calidad',
    'Local sandbox verified': 'Entorno local verificado',
    'A workspace with agency': 'Un espacio con autonomía',
    'The team interface for work that does not fit in one prompt.': 'La interfaz de equipo para un trabajo que no cabe en una sola instrucción.',
    'Create a dedicated context for every initiative. Zenzo keeps specialist agents visible, their outputs traceable, and your next decision easy to find.': 'Crea un contexto dedicado para cada iniciativa. Zenzo mantiene visibles a los agentes especialistas, sus resultados rastreables y tu próxima decisión fácil de encontrar.',
    'Make a squad, not a single request.': 'Crea una escuadra, no una sola petición.',
    'Tools in the flow.': 'Herramientas en el flujo.',
    'Keep sensitive work close.': 'Mantén cerca el trabajo sensible.',
    'Direct the room by voice.': 'Dirige la sala por voz.',
    'A live workspace preview': 'Una vista previa del espacio en vivo',
    'Broadcast one direction. Watch the specialists move.': 'Comunica una dirección. Observa a los especialistas avanzar.',
    'Use a preset to simulate a task assignment across the Zenzo squad. Each role responds from its own point of view, while the shared workspace holds the thread.': 'Usa una opción predefinida para simular una asignación de tareas en la escuadra Zenzo. Cada rol responde desde su propia perspectiva mientras el espacio compartido conserva el hilo.',
    'Product-launch / Squad broadcast': 'Lanzamiento de producto / Emisión de escuadra',
    'Try a task type to update the active agent workstreams.': 'Prueba un tipo de tarea para actualizar los flujos de agentes activos.',
    'Plan a product launch': 'Planificar un lanzamiento',
    'Review customer signals': 'Revisar señales de clientes',
    'Prepare a production build': 'Preparar una compilación de producción',
    'One directive. A visible flow.': 'Una directiva. Un flujo visible.',
    'Frame the goal': 'Define el objetivo',
    'Route the work': 'Distribuye el trabajo',
    'Review the outcome': 'Revisa el resultado',
    'Less context switching': 'Menos cambios de contexto',
    'Clarity is a feature, not an afterthought.': 'La claridad es una función, no una idea posterior.',
    'Build Zenzo with us': 'Construye Zenzo con nosotros',
    'Register for early access to Zenzo Beta.': 'Regístrate para el acceso anticipado a Zenzo Beta.',
    'The request button opens a Google-hosted form; it does not request an existing account password.': 'El botón de solicitud abre un formulario alojado por Google; no solicita la contraseña de una cuenta existente.',
    'The request is sent privately to Zenzo staff for review; it never asks for an existing account password.': 'La solicitud se envía en privado al equipo de Zenzo para su revisión; nunca solicita la contraseña de una cuenta existente.',
    'About Zenzo Beta': 'Acerca de Zenzo Beta',
    'A calmer place to': 'Un lugar más tranquilo para',
    'direct AI work.': 'dirigir el trabajo con IA.',
    'Zenzo is a product workspace for teams that need to frame a goal, coordinate specialized AI agents, and keep the resulting work visible in one shared context. It is designed to make agentic work easier to review rather than harder to understand.': 'Zenzo es un espacio de producto para equipos que necesitan definir un objetivo, coordinar agentes de IA especializados y mantener el trabajo resultante visible en un contexto compartido. Está diseñado para que el trabajo con agentes sea más fácil de revisar y comprender.',
    'This public site does not ask for GitHub, Google, or account passwords.': 'Este sitio público no solicita contraseñas de GitHub, Google ni de cuentas.',
    'What the app is for': 'Para qué sirve la aplicación',
    'One direction in. A visible flow out.': 'Una dirección entra. Un flujo visible sale.',
    'Early access': 'Acceso anticipado',
    'How the beta works': 'Cómo funciona la beta',
    'Request access': 'Solicitar acceso',
    'Receive product communication': 'Recibir comunicación del producto',
    'Use the product intentionally': 'Usar el producto con intención',
    'People remain responsible for decisions.': 'Las personas siguen siendo responsables de las decisiones.',
    'Zenzo Docs': 'Documentación de Zenzo',
    'Product context without': 'Contexto del producto sin',
    'the mystery.': 'misterio.',
    'Public documentation is informational, not an authentication flow.': 'La documentación pública es informativa, no es un flujo de autenticación.',
    'Product guide': 'Guía del producto',
    'How the Zenzo workspace is intended to work': 'Cómo está pensado que funcione el espacio de Zenzo',
    'The workspace': 'El espacio de trabajo',
    'A visible workflow': 'Un flujo visible',
    'Human review': 'Revisión humana',
    'How to identify the official public site': 'Cómo identificar el sitio público oficial',
    'Trust center': 'Centro de confianza',
    'Clear signals, no': 'Señales claras, sin',
    'credential traps.': 'trampas de credenciales.',
    'Zenzo does not ask visitors for GitHub, Google, or workplace passwords on public pages.': 'Zenzo no solicita a los visitantes contraseñas de GitHub, Google ni del trabajo en páginas públicas.',
    'Official public presence': 'Presencia pública oficial',
    'Use verifiable destinations.': 'Usa destinos verificables.',
    'Before you continue': 'Antes de continuar',
    'A quick link check': 'Una comprobación rápida de enlaces',
    'Read the domain': 'Lee el dominio',
    'Check the action': 'Comprueba la acción',
    'Verify independently': 'Verifica de forma independiente',
    'Public information is not internal access.': 'La información pública no es acceso interno.',
    'What Zenzo public pages will not do': 'Lo que las páginas públicas de Zenzo no harán',
    'Signs to stop and verify.': 'Señales para detenerse y verificar.',
    'Request passwords': 'Solicitar contraseñas',
    'Imitate a login flow': 'Imitar un inicio de sesión',
    'Create false urgency': 'Crear urgencia falsa',
    'Draft privacy policy': 'Borrador de política de privacidad',
    'Privacy should be': 'La privacidad debe ser',
    'plain to read.': 'fácil de leer.',
    'Draft terms of use': 'Borrador de términos de uso',
    'Clear expectations for a': 'Expectativas claras para una',
    'public beta.': 'beta pública.',
    'Human review notice': 'Aviso de revisión humana',
    'People review the work.': 'Las personas revisan el trabajo.',
    'This page does not sign anyone in.': 'Esta página no inicia sesión para nadie.',
    'Request early access.': 'Solicita acceso anticipado.',
    'This request flow is not a Zenzo account login.': 'Este flujo de solicitud no es un inicio de sesión de Zenzo.',
    'Apply directly from the official Zenzo site. Your request is sent privately to the Zenzo staff review bot in Discord; selected applicants receive next steps by email.': 'Solicita directamente desde el sitio oficial de Zenzo. Tu solicitud se envía en privado al bot de revisión del equipo de Zenzo en Discord; los solicitantes seleccionados recibirán los siguientes pasos por correo electrónico.',
    'Early-access request': 'Solicitud de acceso anticipado',
    'Two details are all we need to contact you.': 'Solo necesitamos dos datos para ponernos en contacto contigo.',
    'Full name': 'Nombre completo',
    'Email address': 'Correo electrónico',
    'Your name': 'Tu nombre',
    'Send request to Zenzo': 'Enviar solicitud a Zenzo',
    'Your name and email go only to Zenzo’s private staff review workflow. This is not a login or account-creation form.': 'Tu nombre y correo electrónico van únicamente al flujo privado de revisión del equipo de Zenzo. No es un formulario de inicio ni de creación de cuenta.',
    'Zenzo public pages never request GitHub, Google, Discord, or workplace passwords. The form only sends your name and email to the private Zenzo staff review channel.': 'Las páginas públicas de Zenzo nunca solicitan contraseñas de GitHub, Google, Discord o trabajo. El formulario solo envía tu nombre y correo electrónico al canal privado de revisión del equipo de Zenzo.',
    'Official early-access request for Zenzo Beta.': 'Solicitud oficial de acceso anticipado para Zenzo Beta.'
  };

  Object.assign(es, {
    'Core Orchestrator': 'Orquestador central',
    'GPT · tool routing': 'GPT · enrutamiento de herramientas',
    'Research Analyst': 'Analista de investigación',
    'web · insight layer': 'web · capa de análisis',
    'Code Architect': 'Arquitecto de código',
    'local · build path': 'local · ruta de compilación',
    'Brief received. I am splitting launch readiness into research, implementation, and QA tracks.': 'Resumen recibido. Estoy dividiendo la preparación del lanzamiento en investigación, implementación y control de calidad.',
    'Audience signals are mapped. I found three high-intent themes to include in the narrative.': 'Las señales de audiencia están mapeadas. Encontré tres temas de alta intención para incluir en la narrativa.',
    'Build plan is ready. The local sandbox is validating the implementation path now.': 'El plan de compilación está listo. El entorno local está validando la ruta de implementación.',
    'Squad is working in parallel': 'La escuadra trabaja en paralelo',
    'done': 'completo',
    'running': 'en curso',
    'Group specialists by goal and let an orchestrator divide work into focused streams. You stay close to the result without micromanaging the route.': 'Agrupa especialistas por objetivo y deja que un orquestador divida el trabajo en flujos enfocados. Mantente cerca del resultado sin microgestionar la ruta.',
    'Connect MCP tools alongside conversations, so agents can move from thinking to useful action.': 'Conecta herramientas MCP junto a las conversaciones para que los agentes pasen del pensamiento a una acción útil.',
    'Choose local models and offline voice workflows when the task belongs on your machine.': 'Elige modelos locales y flujos de voz sin conexión cuando el trabajo deba permanecer en tu equipo.',
    'Turn an idea into a squad directive without breaking your concentration. Voice dictation belongs beside the work, not in another tab.': 'Convierte una idea en una directiva de escuadra sin perder la concentración. El dictado por voz debe estar junto al trabajo, no en otra pestaña.',
    'bring the models you trust': 'usa los modelos en los que confías',
    'local-first · private by design': 'local primero · privado por diseño',
    'Ctrl + Shift + D · voice command': 'Ctrl + Shift + D · comando de voz',
    'READY · 3 AGENTS': 'LISTO · 3 AGENTES',
    'Standing by for a squad directive. I will establish the plan and coordinate the handoff.': 'A la espera de una directiva de escuadra. Estableceré el plan y coordinaré la transferencia.',
    'Connected to the research stream. I will surface patterns and decision-grade evidence.': 'Conectado al flujo de investigación. Identificaré patrones y evidencia útil para decidir.',
    'Local sandbox is prepared. I will translate the chosen path into an implementable plan.': 'El entorno local está preparado. Convertiré la ruta elegida en un plan implementable.',
    'context: synced': 'contexto: sincronizado',
    'sources: linked': 'fuentes: vinculadas',
    'mode: local': 'modo: local',
    'ready': 'listo',
    'Brief the work in the squad room': 'Expón el trabajo en la sala de escuadra',
    'Specialists claim their lanes': 'Los especialistas asumen sus tareas',
    'Decide with the team in context': 'Decide con el equipo y su contexto',
    'Zenzo gives complex AI work a dependable shape: teams on the left, an active conversation in the center, and the operational state in view. It is designed to make agentic work feel legible.': 'Zenzo da una forma fiable al trabajo complejo con IA: equipos a la izquierda, una conversación activa en el centro y el estado operativo a la vista. Está diseñado para que el trabajo con agentes sea legible.',
    'agent rooms': 'salas de agentes',
    'connected tools': 'herramientas conectadas',
    'model options': 'opciones de modelo',
    'dictation flow': 'flujo de dictado',
    'A public product site for Zenzo Beta. Review the official repository and information pages before acting on any external request.': 'Un sitio público de producto para Zenzo Beta. Revisa el repositorio oficial y las páginas informativas antes de actuar ante una solicitud externa.',
    'Use the official Pages address shown in the repository. If any page claims to be Zenzo and asks you to sign in unexpectedly, stop and verify the destination before continuing.': 'Usa la dirección oficial de Pages que aparece en el repositorio. Si alguna página afirma ser Zenzo y te pide iniciar sesión de forma inesperada, detente y verifica el destino antes de continuar.',
    'The experience centers work around an active squad room: a goal in context, the specialists responding to it, and operational state that is easy to inspect. The product direction is deliberately practical rather than magical.': 'La experiencia centra el trabajo en una sala de escuadra activa: un objetivo en contexto, especialistas que responden y un estado operativo fácil de inspeccionar. La dirección del producto es deliberadamente práctica, no mágica.',
    'Organize specialists around a shared objective and keep handoffs visible instead of scattering work across disconnected prompts.': 'Organiza especialistas alrededor de un objetivo compartido y mantén visibles las transferencias en lugar de dispersar el trabajo entre instrucciones desconectadas.',
    'Keep the current initiative, agent outputs, and the next decision in one legible workspace for the people responsible for the work.': 'Mantén la iniciativa actual, los resultados de los agentes y la próxima decisión en un espacio legible para las personas responsables del trabajo.',
    'Zenzo’s product direction includes local models and offline voice workflows for situations where work should stay closer to the device.': 'La dirección de producto de Zenzo incluye modelos locales y flujos de voz sin conexión para situaciones en las que el trabajo debe permanecer cerca del dispositivo.',
    'A public home for Zenzo': 'Un hogar público para Zenzo',
    'The official product landing page is published from the Zenzo landing-page repository at': 'La página oficial del producto se publica desde el repositorio de la página de Zenzo en',
    'Product context without the mystery.': 'Contexto del producto sin misterio.',
    'Zenzo organizes an initiative around a shared workspace. A user frames a goal, an orchestrator coordinates specialist work, and the resulting activity remains visible to the person responsible for the outcome. The interface is meant to reduce context switching and make agentic work easier to inspect.': 'Zenzo organiza una iniciativa alrededor de un espacio compartido. Una persona define un objetivo, un orquestador coordina el trabajo especializado y la actividad resultante permanece visible para quien es responsable del resultado. La interfaz busca reducir los cambios de contexto y facilitar la inspección del trabajo con agentes.',
    'Human review means a person remains accountable for interpreting outputs and deciding whether to proceed. A visible agent workflow can help a reviewer understand what was proposed and why, but it does not replace the reviewer’s judgment.': 'La revisión humana significa que una persona sigue siendo responsable de interpretar los resultados y decidir si debe continuar. Un flujo de agentes visible puede ayudar a entender qué se propuso y por qué, pero no reemplaza el criterio de quien revisa.',
    'A public product page should be easy to identify and should not pressure anyone to hand over an account. This page explains the official Zenzo public surface and the checks visitors can use before following a link.': 'Una página pública de producto debe ser fácil de identificar y no debe presionar a nadie para entregar una cuenta. Esta página explica la presencia pública oficial de Zenzo y las comprobaciones que se pueden realizar antes de seguir un enlace.',
    'A quick link check': 'Una comprobación rápida de enlaces',
    'The official public information site for Zenzo Beta. Verify destinations independently before entering credentials anywhere online.': 'El sitio público oficial de información para Zenzo Beta. Verifica los destinos de forma independiente antes de introducir credenciales en cualquier sitio.',
    'Public human-review notice for Zenzo Beta. It is not an internal access path or authentication flow.': 'Aviso público de revisión humana para Zenzo Beta. No es una ruta de acceso interno ni un flujo de autenticación.',
    'Draft policy content for Zenzo Beta. Review the official repository and verify public destinations before sharing information.': 'Contenido de política en borrador para Zenzo Beta. Revisa el repositorio oficial y verifica los destinos públicos antes de compartir información.',
    'Draft terms for the Zenzo Beta public site. Verify public destinations and review these Terms with counsel before relying on them in production.': 'Términos en borrador para el sitio público de Zenzo Beta. Verifica los destinos públicos y revisa estos términos con asesoría legal antes de usarlos en producción.',
    'Official early-access notice for Zenzo Beta.': 'Aviso oficial de acceso anticipado para Zenzo Beta.',
    'product-launch': 'lanzamiento-de-producto',
    'build-room': 'sala-de-compilación',
    'research': 'investigación',
    'squad broadcast enabled': 'emisión de escuadra activada',
    'engineering review active': 'revisión de ingeniería activa',
    'signal review active': 'revisión de señales activa',
    'WORKING · SQUAD ACTIVE': 'TRABAJANDO · ESCUADRA ACTIVA',
    'ROUTING · 3 AGENTS': 'ENRUTANDO · 3 AGENTES',
    'ANALYZING · 3 AGENTS': 'ANALIZANDO · 3 AGENTES',
    'BUILDING · 3 AGENTS': 'COMPILANDO · 3 AGENTES',
    'Receiving task context and preparing the workstream…': 'Recibiendo el contexto de la tarea y preparando el flujo de trabajo…',
    'Launch directive mapped. I split the work into audience narrative, launch assets, and a readiness checklist.': 'La directiva de lanzamiento está mapeada. Dividí el trabajo entre narrativa de audiencia, activos de lanzamiento y una lista de preparación.',
    'I found three high-intent audience themes and am translating them into a concise product narrative.': 'Encontré tres temas de audiencia de alta intención y los estoy convirtiendo en una narrativa de producto concisa.',
    'I am validating the release path and turning the readiness checklist into the final build plan.': 'Estoy validando la ruta de lanzamiento y convirtiendo la lista de preparación en el plan final de compilación.',
    'Customer-signal review is live. I assigned discovery, synthesis, and implementation follow-up in parallel.': 'La revisión de señales de clientes está activa. Asigné descubrimiento, síntesis y seguimiento de implementación en paralelo.',
    'I clustered the signals into recurring needs, objections, and the clearest opportunities to act on next.': 'Agrupé las señales en necesidades recurrentes, objeciones y las oportunidades más claras para actuar a continuación.',
    'I am mapping the highest-confidence findings to practical product changes and estimating implementation scope.': 'Estoy vinculando los hallazgos de mayor confianza con cambios prácticos de producto y estimando el alcance de implementación.',
    'Production build preparation is underway. I assigned environment checks, quality review, and rollout sequencing.': 'La preparación de la compilación de producción está en marcha. Asigné comprobaciones de entorno, revisión de calidad y secuenciación del despliegue.',
    'I am reviewing known release risks and documenting the metrics that should be watched during rollout.': 'Estoy revisando los riesgos conocidos del lanzamiento y documentando las métricas que deben vigilarse durante el despliegue.',
    'The local sandbox is validating the build path, dependency state, and the recommended deployment sequence.': 'El entorno local está validando la ruta de compilación, el estado de dependencias y la secuencia de despliegue recomendada.',
    'MCP · Files · Databases': 'MCP · Archivos · Bases de datos',
    'LIVE WORKFLOW': 'FLUJO EN VIVO',
    'Parallel': 'Paralelo',
    'MCP-ready': 'Preparado para MCP',
    'Local': 'Local',
    'Voice': 'Voz',
    '# general': '# general',
    '# build-room': '# sala-de-compilación',
    '# research': '# investigación',
    'We are welcoming a small group of teams who want a calmer, more capable way to direct AI agents. The request button opens a Google-hosted form; it does not request an existing account password.': 'Estamos dando la bienvenida a un grupo pequeño de equipos que desean una forma más tranquila y capaz de dirigir agentes de IA. El botón de solicitud abre un formulario alojado por Google y no solicita la contraseña de una cuenta existente.',
    'Zenzo Beta — built with its earliest teams.': 'Zenzo Beta — creado con sus primeros equipos.',
    'product-launch': 'lanzamiento-de-producto'
  });

  const originals = new Map();
  const translateValue = (value, language = document.documentElement.lang) => {
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    const key = value.trim().replace(/\s+/g, ' ');
    return language === 'es' && es[key] ? `${leading}${es[key]}${trailing}` : value;
  };
  const shouldTranslate = (node) => {
    const parent = node.parentElement;
    return parent && !parent.closest('script, style, .zenzo-language-toggle, .zenzo-mobile-menu, .zenzo-legal-language-note') && node.nodeValue.trim();
  };

  function collectTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (shouldTranslate(node) && !originals.has(node)) originals.set(node, node.nodeValue);
    }
  }

  function applyLanguage(language) {
    collectTextNodes();
    originals.forEach((original, node) => {
      node.nodeValue = translateValue(original, language);
    });
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    const toggle = document.querySelector('.zenzo-language-toggle');
    if (toggle) {
      toggle.textContent = languageNames[language];
      toggle.setAttribute('aria-label', language === 'es' ? 'Cambiar el sitio a inglés' : 'Cambiar el sitio a español');
      toggle.title = language === 'es' ? 'Switch to English' : 'Cambiar a español';
    }
    const originalTitle = document.documentElement.dataset.zenzoTitle || document.title;
    document.documentElement.dataset.zenzoTitle = originalTitle;
    document.title = language === 'es' && titles[originalTitle] ? titles[originalTitle] : originalTitle;
    document.querySelectorAll('.zenzo-legal-language-note').forEach((note) => { note.hidden = language !== 'es'; });
    localStorage.setItem(STORAGE_KEY, language);
    window.dispatchEvent(new CustomEvent('zenzo:languagechange', { detail: { language } }));
  }

  function injectStyle() {
    if (document.getElementById('zenzo-i18n-style')) return;
    const style = document.createElement('style');
    style.id = 'zenzo-i18n-style';
    style.textContent = `
      .zenzo-language-toggle { display:inline-flex; min-width:42px; min-height:38px; align-items:center; justify-content:center; padding:8px 10px; border:1px solid rgba(185,198,239,.2); border-radius:11px; color:#d9ddf0; background:rgba(255,255,255,.035); font:800 10px/1 Manrope,ui-sans-serif,system-ui,sans-serif; letter-spacing:.06em; cursor:pointer; transition:transform .18s cubic-bezier(.23,1,.32,1),border-color .18s,background .18s; }
      .zenzo-language-toggle:hover { border-color:rgba(196,190,255,.55); background:rgba(126,114,255,.14); transform:translateY(-1px); }
      .zenzo-language-toggle:focus-visible, .zenzo-mobile-menu summary:focus-visible { outline:2px solid #c4beff; outline-offset:3px; }
      .zenzo-mobile-menu { display:none; position:relative; }
      .zenzo-mobile-menu summary { display:inline-flex; width:38px; min-height:38px; align-items:center; justify-content:center; padding:0; border:1px solid rgba(185,198,239,.2); border-radius:11px; color:#f2f3ff; background:rgba(255,255,255,.05); cursor:pointer; list-style:none; }
      .zenzo-mobile-menu summary svg { width:17px; height:17px; }
      .zenzo-mobile-menu summary::-webkit-details-marker { display:none; }
      .zenzo-mobile-menu-panel { position:absolute; z-index:60; top:calc(100% + 9px); right:0; display:grid; min-width:208px; padding:8px; border:1px solid rgba(187,198,239,.18); border-radius:14px; background:rgba(9,11,20,.98); box-shadow:0 18px 42px rgba(0,0,0,.4); backdrop-filter:blur(18px); }
      .zenzo-mobile-menu-panel a { display:flex; min-height:42px; align-items:center; gap:10px; padding:10px; border-radius:9px; color:#cbd2e5; font:700 12px/1.25 Manrope,ui-sans-serif,system-ui,sans-serif; }
      .zenzo-mobile-menu-panel a svg { width:15px; height:15px; flex:0 0 auto; }
      .zenzo-mobile-menu-panel a:hover { color:#fff; background:rgba(126,114,255,.16); }
      .zenzo-legal-language-note { margin:14px 0 0; padding:10px 12px; border-left:3px solid #f6c566; border-radius:0 10px 10px 0; color:#dbcda8; background:rgba(246,197,102,.08); font:700 11px/1.55 Manrope,ui-sans-serif,system-ui,sans-serif; }
      @media (max-width:860px) { .zenzo-mobile-menu { display:block; } .zenzo-language-toggle { min-width:38px; min-height:36px; padding:8px; } }
      @media (max-width:430px) { .zenzo-mobile-menu summary { width:36px; min-height:36px; } }
    `;
    document.head.appendChild(style);
  }

  function injectControls() {
    const nav = document.querySelector('.nav');
    const navLinks = nav?.querySelector('.nav-links');
    if (!nav || !navLinks) return;
    const actionArea = nav.querySelector('.nav-actions, .nav-action');
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'zenzo-language-toggle';
    toggle.setAttribute('aria-label', 'Cambiar el sitio a español');
    toggle.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'es' ? 'en' : 'es'));
    if (actionArea?.classList.contains('nav-actions')) {
      const betaAction = actionArea.querySelector('.btn-primary');
      actionArea.insertBefore(toggle, betaAction || null);
    } else {
      nav.insertBefore(toggle, actionArea || null);
    }

    const menu = document.createElement('details');
    menu.className = 'zenzo-mobile-menu';
    menu.innerHTML = '<summary aria-label="Open site navigation"><i data-lucide="menu" aria-hidden="true"></i></summary><div class="zenzo-mobile-menu-panel"></div>';
    const panel = menu.querySelector('.zenzo-mobile-menu-panel');
    const links = [...navLinks.querySelectorAll('a')].map((link) => link.cloneNode(true));
    const footer = document.querySelector('.footer-links');
    if (footer) {
      [...footer.querySelectorAll('a')].forEach((link) => {
        if (!links.some((existing) => existing.getAttribute('href') === link.getAttribute('href'))) links.push(link.cloneNode(true));
      });
    }
    links.forEach((link) => {
      link.addEventListener('click', () => { menu.open = false; });
      panel.appendChild(link);
    });
    nav.insertBefore(menu, actionArea || null);

    if (/(privacy|terms)\.html$/i.test(location.pathname)) {
      const target = document.querySelector('.document');
      if (target) {
        const note = document.createElement('p');
        note.className = 'zenzo-legal-language-note';
        note.hidden = true;
        note.textContent = 'Nota de idioma: este borrador legal se mantiene en inglés para revisión jurídica. La interfaz y la navegación están disponibles en español.';
        target.prepend(note);
      }
    }
  }

  function init() {
    injectStyle();
    injectControls();
    const preferred = localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en';
    applyLanguage(preferred);
    if (window.lucide) window.lucide.createIcons();
  }

  window.ZenzoI18n = { translate: (value) => translateValue(value, document.documentElement.lang) };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
