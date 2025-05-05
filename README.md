### URL's: 
#### We have coded using Glitch not Github, here are our links:
- ***Glitch Link:*** https://covids-noise-fallout.glitch.me
- ***Glitch Code:*** https://glitch.com/edit/#!/covids-noise-fallout 
<br /><br />

### Project Summary:

Our project compares noise pollution in Europe before COVID-19 (2016) and during COVID-19 (2021). Our data visualisation highlights the difference in noise pollution levels before and during covid and the impact noise pollution has on our health. 
<br /> <br /><br />

### Group Organisation:

Initially in the research phase of our project our group had clear roles and various methods set out on how we would work together. We communicated through WhatsApp, Word documents, and regular video calls (using FaceTime to share screens and quickly solve questions). We agreed to use Glitch to work on our code together instead of exchanging files, this was to help avoid losing code and accidentally overwriting wrong files.

We also kept a shared research document with links to our inspirations, articles, and data sets, which listed what needed completing on the site. Additionally, we used a To-Do file on the site to keep track of bugs, and other technical issues that needed fixing.

We updated our progress using a WhatsApp group chat, which helped us handle workload distribution and keep track of who was working on what. Furthermore, we kept diary entries on Notion for accountability and to show a timeline of our project’s development.

As an all-female team, we focused on using reliable open-source data and cleaning it using an open-source journalistic approach. Our approach not only ensures quality work but also raises awareness about how lowering noise pollution can have a positive impact on health, raising awareness of marginalised experiences.

Claudia and Nellie focused on visualising Lden levels across Europe before and during Covid, Whilst Alice and Cherry visualised the impact noise pollution has on health. As group we always aimed to use an Intersectional Feminist and Open-Source journalistic approach to our data sets and their visualisation. 
<br /> <br /> <br />

### Key Sources of Inspirations:

#### Journalistic and Theoretical Influences:
- James Gallagher - BBC (Gallagher, 2025)
    - Highlights how urban noise is linked to serious health issues such as heart disease, diabetes, and even dementia.
- David Owen - The New Yorker (Owen,2019)
    - Highlighted that those that live near railways, airports and main roads are more likely to have a serious health issues due to exposure to load noise.

#### Aesthetic and Technical Influences:
- We Are Possible, Noisy Cities (We Are Possible, 2025)
    - An interactive map showcasing noise pollution levels in different areas of cities. It has noise, colour gradients to let users explore urban noise in real time.
- Hillarys, Skyglow (Hillarys, 2025)
    - Maps the brightness of night skies across regions. User has more control over what they can see. Also uses a choropleth-style map that visually represents intensity through color variations.
  <br /> <br /> <br />

### Introduction of our Datasets

#### Data used to demonstrate Impacts of noise on health:

In our switchable bar charts, we mainly use data from the European Union Environment Agency (EEA): 2017 Report on Health Risks due to Ambient Noise in Europe published in 2020, as well as statistics on the number of people chronically exposed to noise pollution in the EU27 countries mentioned as textual additions in 2022 and 2017.

The bar chart data only mentions the number of people affected in 2017, and lacks 2022 (updated every five years) so the text is supplemented with statistics on the number of people exposed to noise pollution for comparison. Meanwhile, 2022 is in the coivd-19 period, so you can see the reduction in noise from the change in total numbers.

We chose toggleable bars because of the large number of disease categories and the fact that they involve both in-city and out-of-city. Toggle bars with an information supplement box allow the reader to view the data directly and link to the text. This keeps the viewer from forgetting the bar chart data and thus failing to make the connection.

#### Data used for Interactive Map:

##### For our interactive map pages we used two data sets:

- Before Covid, END 2017 Dataset, which shows Noise exposure data for 2016 for EEA member countries.

- During Covid: END 2022 Dataset, which reflects noise exposure for the year 2021 of EEA member countries.

Both from are from the European Environment Agency (EEA), the official body responsible for monitoring environmental quality across the EU. The EEA provides open source data which is freely available to the public.

Data is submitted by member states under the legally mandated Environmental Noise Directive (END), it ensures measurements are taken using standardised methods and instruments. This provided us with comparable and reliable Lden data to visualise as each country follows the same protocols and quality with consistent reporting.

We chose to visualise Lden levels as it represents the Day-Evening-Night-Level, which adds extra decibel penalties for noise in the evening. Whilst each country follows the END protocol for measuring Lden levels, some countries recorded data earlier or later than others due to weather conditions and local issues. This allows each member state flexibility in when within that period they conduct their measurements. Although this means there are disparities in the data, the EEA standardises results during the data processing phase to enable comparisons.
<br /> <br /><br />

### Document and Technical Design
#### The Interactive Map page Design and Development:
The Wireframe of our site took inspiration from We Are Possible’s, Noisy Cities (We Are Possible, 2025), which involves an interactive map highlighting noise pollution levels in different cities. It was this data visualisation that initially inspired us to create an interactive map, at the beginging of the project. 

Following the wireframe designed for our presentation, our project began to take more of a gamified aesthetic.
Because of this we considered how we could bring in interactive features and animations that could enhance this idea.
For example we introduced a GIF loading screen, and key frame animations when the user hovered over the heat nodes.
Additionally, used a gamified font, Roboto to follow this aesthetic.
<img src="https://cdn.glitch.global/8f98181d-cb9a-4987-8ef2-b9167a0ad0f4/Screenshot%202025-04-09%20at%2002.29.03.png?v=1744162148488">
^Our wireframe
<br /><br />
For the map we decided against using leaflet maps as, we found it easier to set up a countainer in which we could plot our heat nodes.
We ran into issues with getting the pins to stay fixed within the container when the widow was resized, this was partly due to us introducing functions at the same time, interfering with the DOM. To overcome this, a lot of the map was developed in person or over face-time, so that we understood what was being added to the code and when.
<img src="https://cdn.glitch.global/ba49ec6b-b320-4abb-9df3-fb60ec67b846/Screenshot%202025-05-04%20at%2022.32.16.png?v=1746394491542">
^Our final outcome
<br /><br />

#### The Home Page Design and Development:
Our home page visulised the impacts noise pollution has on out health. 
For the home page, we explored a variety of interactive website designs, aiming to create a visually dynamic homepage that could effectively visualise the impacts noise pollution has on our health. However, we soon realized the technical complexity of such an approach. As a result, we shifted our focus and drew inspiration from the BBC’s website, which emphasizes clarity and straightforward presentation—something we found more suitable for our topic of noise pollution.
<img src="https://cdn.glitch.global/ba49ec6b-b320-4abb-9df3-fb60ec67b846/homepage.png?v=1746382302253">
^Our inspiration 
<br /><br />
In our final version home page design, we adopted a split-screen structure: a data visualization graph is embedded in the top-left corner, while our research findings are displayed on the right. This layout enables users to absorb the information efficiently without feeling overwhelmed.
<img src="https://cdn.glitch.global/ba49ec6b-b320-4abb-9df3-fb60ec67b846/homedesign.png?v=1746383229513">
^Our wireframe
<img src="https://cdn.glitch.global/ba49ec6b-b320-4abb-9df3-fb60ec67b846/Screenshot%202025-05-04%20at%2022.38.05.png?v=1746394689916">
^Final outcome
<br /> <br /><br />


### Challenges:

Whilst initally we worked really well together as a team, due to illness and not having face-to-face meetings in the last few workshops meant that it became difficult to communicate well. This was a crucial period for us a team as it was a chance for us to plan who would work on what over the break when we would not be able to always meet in person.

In hindsight, we should have clarified tasks and their delegation much earlier to avoid confusion. Whilst the group research document always had a link to updated code, it would have been good to re-share this to the group chat more frequently.

Despite these difficulties, we all came together to produce a site that we are all proud of. We all contributed to the visualisation of the data, bringing different cultural takes, personal strengths and opinions on the site's development and visualisation.
<br /> <br />

### Other External sources:

#### These are sources we used for code help and theory research during our project

##### Webpages and Articles

BBC News (2025) How our noisy world is seriously damaging our health. Available at: https://www.bbc.co.uk/news/articles/crmjdm2m4yjo

European Environment Agency (2025) Lden. Available at: https://www.eea.europa.eu/help/glossary/eea-glossary/lden

European Environment Agency (2025) Noise Indicator Datahub. Available at: https://www.eea.europa.eu/en/datahub/datahubitem-view/c952f520-8d71-42c9-b74c-b7eb002f939b?activeAccordion=1093188

Hillarys (2025) Skyglow. Available at: https://www.hillarys.co.uk/skyglow/

Stack Overflow (2013) JavaScript play sound on hover, stop and reset on hover off. Available at: https://stackoverflow.com/questions/14926306/javascript-play-sound-on-hover-stop-and-reset-on-hoveroff

We Are Possible (2025) Noisy Cities. Available at: https://interactive.wearepossible.org/noisycities/#/?city=paris&language=en

WHO (2025) Compendium on health and environment: Environmental noise. Available at: https://www.who.int/tools/compendium-on-health-and-environment/environmental-noise

GitHub (2025) Basic writing and formatting syntax. Available at: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

Markdown Guide (2025) Basic syntax. Available at: https://www.markdownguide.org/basic-syntax/

##### Videos

YouTube (2019) Loading screen code tutorial [Video]. Available at: https://www.youtube.com/watch?v=b9zyKCsUJfY

YouTube (2019) Unknown title [Video]. Available at: https://www.youtube.com/watch?v=Is_5X2z2b0k

##### Datasets and Tools

European Environment Agency (2017, 2022) Environmental Noise Directive datasets [Datasets]. Available at: https://1drv.ms/x/c/a267aa82b38a3622/EX-bT30MRJpKr4wAdYWe1hsBByYWln34DrKzXBYEGwJh9A

Google Fonts (n.d.) Material Symbols and Icons. Available at: https://fonts.google.com/icons

##### Impacts on health:

Couldry, N., & Powell, A. (2012). Big Data from the bottom up. Information, Communication & Society, 15(5), 613–632. https://doi.org/10.1080/1369118X.2012.678878

ETC/ATNI Report 06/2021. Noise indicators under the Environmental Noise Directive 2021: Methodology for estimating missing data.
https://www.eionet.europa.eu/etcs/etc-atni/products/etc-atni-reports/etc-atni-report-06-2021-noise-indicators-under-the-environmental-noise-directive-2021-methodology-for-estimating-missing-data

European Environment Agency. (2020). Health risks caused by environmental noise in Europe.
https://www.eea.europa.eu/publications/health-risks-caused-by-environmental

European Environment Agency. (2020). Unequal exposure and unequal impacts: Social vulnerability to air pollution, noise and extreme temperatures in Europe.
https://www.eea.europa.eu/en/analysis/publications/unequal-exposure-and-unequal-impacts

European Environment Agency. (2021). Noise indicators under the Environmental Noise Directive 2021: Methodology for estimating missing data.
https://www.eionet.europa.eu/etcs/etc-atni/products/etc-atni-reports/etc-atni-report-06-2021-noise-indicators-under-the-environmental-noise-directive-2021-methodology-for-estimating-missing-data

European Environment Agency. (2024). Estimated number of people exposed to long-term harmful levels of road, rail and aircraft noise, EU-27.
https://www.eea.europa.eu/en/analysis/indicators/exposure-of-europe-population-to-noise/estimated-number-of-people-exposed

Khomenko, S. et al. (2022). Impact of road traffic noise on annoyance and preventable mortality in European cities: A health impact assessment. Environment International, 162, 107160.
https://doi.org/10.1016/j.envint.2022.107160

Munzel, T. et al. (2014). Cardiovascular effects of environmental noise exposure. European Heart Journal, 35(13), 829–836.
https://doi.org/10.1093/eurheartj/ehu030

Niemann, H., Maschke, C., and World Health Organization. (2004). Noise effects and morbidity, Final Report.
https://iris.who.int/bitstream/handle/10665/374799/WHO-EURO-2004-8723-48495-72051-eng.pdf?sequence=1&isAllowed=y

Noise pollution and health (2023).
https://www.eea.europa.eu/publications/zero-pollution/health/noise-pollution

World Health Organization. (2018).
Environmental noise guidelines for the European Region.
