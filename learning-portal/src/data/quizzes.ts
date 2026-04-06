import type { QuizQuestion } from '../components/QuizSection';

export const chapter1Quiz: QuizQuestion[] = [
  {
    question: 'What is the primary source of geothermal energy?',
    options: [
      'Solar radiation absorbed by the Earth',
      "Heat from the Earth's interior",
      'Wind patterns underground',
      'Ocean currents',
    ],
    correctAnswer: 1,
    explanation:
      "Geothermal energy comes from heat stored inside the Earth, originating from radioactive decay and residual heat from planetary formation.",
  },
  {
    question: 'How do ground-source heat pumps help heat buildings in winter?',
    options: [
      'They burn fuel to generate heat directly',
      'They pull heat from the ground into buildings',
      'They rely only on rooftop solar panels',
      'They use outdoor air as their only heat source',
    ],
    correctAnswer: 1,
    explanation:
      'In winter, ground-source heat pumps extract thermal energy from relatively stable underground temperatures and move it into buildings.',
  },
  {
    question: 'What is a key benefit of district heating and cooling systems?',
    options: [
      'Each building must install a separate boiler',
      'Shared infrastructure can improve efficiency across many buildings',
      'They only work in warm climates',
      'They eliminate all maintenance requirements',
    ],
    correctAnswer: 1,
    explanation:
      'District systems share infrastructure and thermal resources, which can improve efficiency and lower per-building costs compared with isolated equipment.',
  },
  {
    question: 'How is geothermal heating and cooling different from geothermal electricity generation?',
    options: [
      'Heating and cooling use shallower, lower-temperature resources',
      'Heating and cooling require hotter rock than power plants',
      'They are exactly the same system',
      'Heating and cooling can only work near volcanoes',
    ],
    correctAnswer: 0,
    explanation:
      'Heating and cooling systems typically use stable shallow-ground temperatures, while geothermal power generation relies on much hotter resources deep underground.',
  },
  {
    question: 'Why can geothermal systems reduce long-term energy costs?',
    options: [
      'They eliminate all upfront investment',
      'They make heating and cooling equipment unnecessary',
      'They move heat efficiently and can stabilize operating costs over time',
      'They always require less planning than other systems',
    ],
    correctAnswer: 2,
    explanation:
      'Heat pumps move thermal energy very efficiently, which can reduce operating costs and help households or communities avoid fuel-price volatility over time.',
  },
];

export const chapter2Quiz: QuizQuestion[] = [
  {
    question: 'Why is a coalition important for a community geothermal project?',
    options: [
      'It limits the project to only one stakeholder group',
      'It helps align support, skills, and decision-making power across the community',
      'It replaces the need for engineers and studies',
      'It guarantees funding immediately',
    ],
    correctAnswer: 1,
    explanation:
      'A coalition brings together residents, institutions, utilities, government, and other allies so the project has broader support and more capacity to move forward.',
  },
  {
    question: 'What kinds of places are often promising early opportunities for geothermal networks?',
    options: [
      'Only remote single-family homes',
      'Only industrial sites outside town centers',
      'Schools, public buildings, clustered commercial areas, and new developments',
      'Only buildings that already use geothermal',
    ],
    correctAnswer: 2,
    explanation:
      'Chapter 2 highlights public buildings, new developments, commercial districts, and sites with useful infrastructure as realistic starting points for community action.',
  },
  {
    question: 'What should a coalition process help clarify?',
    options: [
      'How to avoid involving the broader community',
      'Who the key decision-makers are and what information matters to them',
      'How to skip planning steps',
      'How to build the system without any ownership discussion',
    ],
    correctAnswer: 1,
    explanation:
      'A good coalition process identifies decision-makers, clarifies roles, and helps supporters understand which steps and messages will move the project forward.',
  },
  {
    question: 'Why do financing and ownership discussions matter early?',
    options: [
      'Because they shape who pays, who governs, and how the project can move ahead',
      'Because financing is only a minor detail after construction begins',
      'Because all projects must use the same ownership model',
      'Because communities are not affected by ownership structure',
    ],
    correctAnswer: 0,
    explanation:
      'Ownership and financing affect accountability, affordability, governance, and the kinds of institutions that need to be involved in project development.',
  },
];

export const chapter3Quiz: QuizQuestion[] = [
  {
    question: 'What makes a building or area a strong early candidate for a geothermal network?',
    options: [
      'It is isolated from all other buildings',
      'It has high energy demand and is close to other potential nodes',
      'It has no owner support and no infrastructure access',
      'It can only be used if it already has geothermal equipment',
    ],
    correctAnswer: 1,
    explanation:
      'Good early candidates usually combine strong heating and cooling demand with proximity, timing, and conditions that make network connections more practical.',
  },
  {
    question: 'What is the main purpose of a scoping study?',
    options: [
      'To market the project before any analysis happens',
      'To answer technical, spatial, and financial questions about what the system could look like',
      'To replace all engineering work permanently',
      'To focus only on public messaging',
    ],
    correctAnswer: 1,
    explanation:
      'A scoping study helps a coalition and its consultants understand demand, geology, network layout, equipment needs, and likely project costs before detailed implementation.',
  },
  {
    question: 'Why do building-scale retrofits matter in a district geothermal project?',
    options: [
      'Because community systems eliminate all building-level changes',
      'Because each connected building still needs interior equipment and integration work',
      'Because only schools ever connect to networks',
      'Because retrofits are unrelated to district system success',
    ],
    correctAnswer: 1,
    explanation:
      'Even with shared infrastructure, each building needs some combination of heat pumps, heat exchangers, controls, and distribution upgrades to connect properly.',
  },
  {
    question: 'Why is community engagement essential during project development?',
    options: [
      'It helps surface concerns, improve the project, and build legitimate community buy-in',
      'It is only useful after construction starts',
      'It should focus on one outreach channel only',
      'It matters less than technical planning',
    ],
    correctAnswer: 0,
    explanation:
      'Community engagement strengthens the project by bringing in local knowledge, identifying impacts early, and giving affected people a real chance to shape the process.',
  },
];
