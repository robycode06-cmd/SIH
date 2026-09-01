import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
Satellite,
Brain,
Flame,
Database,
BarChart3,
Target,
Eye,
ShieldCheck,
Menu,
X,
Activity,
} from "lucide-react";

const Aboutus = () => {
const [menuOpen, setMenuOpen] = useState(false);

return ( 
  <>
    <Navbar/>


  {/* Hero Section */}
  <section className="bg-orange-50 px-5 py-20">
    <div className="mx-auto max-w-5xl text-center">
      <div className="mb-5 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-orange-600 shadow-sm">
          <Satellite size={18} />
          Satellite Based Fire Monitoring
        </div>
      </div>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
        Turning Thermal Data Into
        <span className="block text-orange-500">
          Actionable Insights
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
        We are building an intelligent thermal anomaly classification system
        that helps identify and categorize possible fire events using
        satellite-based thermal data.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <span className="rounded-md bg-white px-4 py-2 text-sm shadow-sm">
          Satellite Data
        </span>

        <span className="rounded-md bg-white px-4 py-2 text-sm shadow-sm">
          Machine Learning
        </span>

        <span className="rounded-md bg-white px-4 py-2 text-sm shadow-sm">
          Fire Classification
        </span>
      </div>
    </div>
  </section>

  {/* About Project */}
  <section className="px-5 py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-900">
        About Our Project
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <Satellite size={40} className="text-orange-500" />

          <h3 className="mt-4 text-xl font-semibold">
            Satellite-Based Data
          </h3>

          <p className="mt-3 leading-relaxed text-gray-600">
            Our project uses thermal anomaly data provided by NASA FIRMS.
            This data is collected using Earth-observing satellites and can
            help identify unusual thermal activity.
          </p>
        </div>

        <div>
          <p className="leading-relaxed text-gray-600">
            By using data analysis and machine learning techniques, we aim
            to classify detected thermal events into categories such as
            wildfires, forest fires, and factory or industrial fires.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Our goal is to make the available satellite data easier to
            understand and use for analyzing possible fire events.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Mission */}
  <section id="mission" className="bg-gray-100 px-5 py-16">
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center gap-2">
        <Target className="text-orange-500" />

        <h2 className="text-3xl font-bold text-gray-900">
          Our Mission
        </h2>
      </div>

      <p className="mt-6 max-w-4xl leading-relaxed text-gray-600">
        Our mission is to make satellite-based fire monitoring more
        accessible and easier to understand. Large thermal datasets contain
        useful information about fire activity, but analyzing this
        information can be difficult.
      </p>

      <p className="mt-4 max-w-4xl leading-relaxed text-gray-600">
        We want to use technology and machine learning to transform raw
        thermal observations into useful classifications that can help
        people better understand fire-related events.
      </p>
    </div>
  </section>

  {/* How It Works */}
  <section id="how-it-works" className="px-5 py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-900">
        How It Works
      </h2>

      <p className="mt-3 text-gray-600">
        Our project follows a simple process to analyze and classify
        thermal events.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-lg border border-gray-200 p-6">
          <Satellite className="text-orange-500" size={30} />

          <h3 className="mt-4 text-lg font-semibold">
            1. Collect Data
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Thermal anomaly information is collected from NASA FIRMS
            satellite data.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg border border-gray-200 p-6">
          <Database className="text-orange-500" size={30} />

          <h3 className="mt-4 text-lg font-semibold">
            2. Process Data
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            The collected data is cleaned and prepared before it is used for
            further analysis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg border border-gray-200 p-6">
          <Brain className="text-orange-500" size={30} />

          <h3 className="mt-4 text-lg font-semibold">
            3. Analyze Patterns
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Machine learning techniques are used to identify patterns in
            thermal observations.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg border border-gray-200 p-6">
          <Flame className="text-orange-500" size={30} />

          <h3 className="mt-4 text-lg font-semibold">
            4. Classify Fire Events
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Events are classified into different categories of possible fire
            activity.
          </p>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg border border-gray-200 p-6">
          <BarChart3 className="text-orange-500" size={30} />

          <h3 className="mt-4 text-lg font-semibold">
            5. Show Results
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            The final results can be displayed using simple visualizations
            and reports.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Why It Matters */}
  <section className="bg-orange-50 px-5 py-16">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-900">
        Why It Matters
      </h2>

      <div className="mt-7 grid gap-8 md:grid-cols-2">
        <div>
          <p className="leading-relaxed text-gray-600">
            Fires can have serious environmental, economic, and social
            impacts. Understanding fire events early can help improve
            monitoring and response.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Satellite observations make it possible to monitor thermal
            events across large geographic areas.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Activity className="text-orange-500" size={35} />

          <h3 className="mt-4 text-xl font-semibold">
            Large Scale Monitoring
          </h3>

          <p className="mt-3 leading-relaxed text-gray-600">
            Using satellite data allows thermal activity to be observed
            across large areas that may be difficult to monitor manually.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Vision */}
  <section className="px-5 py-16">
    <div className="mx-auto max-w-4xl text-center">
      <Eye size={40} className="mx-auto text-orange-500" />

      <h2 className="mt-5 text-3xl font-bold text-gray-900">
        Our Vision
      </h2>

      <p className="mt-6 leading-relaxed text-gray-600">
        We envision a future where satellite data and artificial
        intelligence can work together to make environmental monitoring
        faster and smarter.
      </p>

      <p className="mt-4 leading-relaxed text-gray-600">
        Our project is a step towards building systems that can help
        researchers, authorities, industries, and communities better
        understand thermal events and improve fire-monitoring capabilities.
      </p>

      <p className="mt-8 font-semibold text-orange-500">
        Data-driven. Technology-powered. Built for a safer and more
        informed future.
      </p>
    </div>
  </section>

  {/* Data Source */}
  <section className="bg-gray-100 px-5 py-16">
    <div className="mx-auto max-w-5xl rounded-lg bg-white p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-blue-50 p-3 text-blue-500">
          <ShieldCheck size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Data Source
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Our project uses publicly available thermal anomaly information
            provided through NASA FIRMS (Fire Information for Resource
            Management System).
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            The classification results generated by our system are intended
            for research and analytical purposes and should not be treated
            as an official emergency alert or fire determination.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-gray-200 bg-white px-5 py-6">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
      <div className="flex items-center gap-2">
        <Flame size={18} className="text-orange-500" />
        Thermal Insight
      </div>

      <p>Built using satellite data and machine learning.</p>
    </div>
  </footer>

  </>
 




);
};

export default Aboutus;
