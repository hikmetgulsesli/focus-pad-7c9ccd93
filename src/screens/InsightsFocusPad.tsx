// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, BarChart3, CheckCircle2, CircleAlert, CircleUserRound, Download, Ellipsis, Info, ListFilter, ListTodo, PackageSearch, Search, Settings, Timer, TrendingUp } from "lucide-react";


export type InsightsFocusPadActionId = "new-record-1" | "search-2" | "settings-3" | "account-circle-4" | "filter-5" | "export-summary-6" | "records-1" | "insights-2" | "archive-3" | "review-now-4" | "documentation-5" | "support-6" | "privacy-7";

export interface InsightsFocusPadProps {
  actions?: Partial<Record<InsightsFocusPadActionId, () => void>>;

}

export function InsightsFocusPad({ actions }: InsightsFocusPadProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col bg-surface-container-low border-r border-outline-variant fixed left-0 h-full w-panel-width-sm py-6 px-4 gap-stack-gap z-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-2">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant shrink-0">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A minimalist profile picture of a professional user in a well-lit studio setting. Crisp white and indigo tones. Serene mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaphh-hRyBkktjfe_059d2jnizh3VUwqaC7pcayL6UUI8OZhRNX5-Klj1fI71yexcgdfVcfrhCYVhU5b2RPhDpxsmqzsMvtBcU_VgCUJXfKcgWu2XlpSrE-_4bnm157Igm57oAFeJQV60rowM2SXhTyUwyy0xO-9Rxue1A5EMYuxXS0k0YCiZ1U7fnA0HSb4t-WKHlgxpEvjFEJkYoWgpqG5ana58G6IcmIAs6lMQ0vuqy9xjtBqn5LWYrzRMwiAxZiFRHx14DjHIs" />
      </div>
      <div className="flex flex-col overflow-hidden">
      <span className="font-display text-headline-md text-primary truncate">Focus Pad</span>
      <span className="font-body-md text-body-md text-secondary truncate">Utility Management</span>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-1 flex-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-surface-container-high transition-colors duration-200 ease-in-out group" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <ListTodo className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Records</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary font-bold bg-primary-container transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <BarChart3 style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:bg-surface-container-high transition-colors duration-200 ease-in-out group" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <PackageSearch className="text-[20px] group-hover:text-on-surface transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md group-hover:text-on-surface transition-colors">Archive</span>
      </a>
      </div>
      {/* CTA */}
      <button className="w-full h-8 flex items-center justify-center bg-primary text-on-primary rounded-DEFAULT border border-transparent shadow-sm hover:opacity-90 active:opacity-80 transition-opacity mt-auto" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <span className="font-label-md text-label-md">New Record</span>
      </button>
      </nav>
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 md:ml-[280px] h-full overflow-hidden">
      {/* TopNavBar (Mobile mainly, but keeping structure for consistency as requested) */}
      <header className="flex justify-between items-center w-full px-container-padding h-12 bg-surface border-b border-outline-variant z-10 shrink-0">
      {/* Search (Left) */}
      <div className="flex items-center">
      <div className="relative hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-[16px]" aria-hidden={true} focusable="false" />
      <input className="h-8 pl-8 pr-3 bg-surface border border-outline-variant rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md w-64 text-on-surface placeholder:text-secondary" placeholder="Search insights..." type="text" />
      </div>
      <button className="sm:hidden p-1 text-secondary hover:bg-surface-container transition-colors rounded-DEFAULT" type="button" aria-label="Search" data-action-id="search-2" onClick={actions?.["search-2"]}>
      <Search className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Mobile Brand */}
      <div className="md:hidden font-display text-display text-primary">Focus Pad</div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-2">
      <button className="p-1 text-secondary hover:bg-surface-container transition-colors rounded-DEFAULT cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 text-secondary hover:bg-surface-container transition-colors rounded-DEFAULT cursor-pointer active:opacity-80" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <main className="flex-1 overflow-y-auto bg-surface-container-lowest px-4 py-6 md:p-8">
      <div className="max-w-[1024px] mx-auto flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Operational Insights</h1>
      <p className="font-body-md text-body-md text-secondary mt-1">Summary and trends for current active records.</p>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-8 px-3 flex items-center gap-2 bg-surface border border-outline-variant rounded-DEFAULT hover:bg-surface-container transition-colors text-on-surface" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Filter</span>
      </button>
      <button className="h-8 px-3 flex items-center gap-2 bg-surface border border-outline-variant rounded-DEFAULT hover:bg-surface-container transition-colors text-on-surface" type="button" data-action-id="export-summary-6" onClick={actions?.["export-summary-6"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Export Summary</span>
      </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Metrics Row (Spans full width on mobile, 2/3 on desktop) */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-secondary">
      <Timer className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase tracking-wider">Avg Completion</span>
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display text-[32px] leading-tight font-semibold text-on-surface">2.4</span>
      <span className="font-body-md text-body-md text-secondary">days</span>
      </div>
      <div className="flex items-center gap-1 text-primary mt-1">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">12% from last week</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-secondary">
      <TrendingUp className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase tracking-wider">Record Growth</span>
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display text-[32px] leading-tight font-semibold text-on-surface">+145</span>
      </div>
      <div className="flex items-center gap-1 text-on-surface mt-1">
      <CheckCircle2 className="text-[14px] text-secondary" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-secondary">On target</span>
      </div>
      </div>
      </div>
      {/* Actionable Hints (Spans 1/3 on desktop) */}
      <div className="md:col-span-1 bg-surface border border-outline-variant rounded-DEFAULT p-4 flex flex-col h-full">
      <div className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4 border-b border-outline-variant pb-2">Action Required</div>
      <div className="flex flex-col gap-3 flex-1">
      <div className="flex items-start gap-3 p-2 bg-error-container/20 rounded-DEFAULT border border-error/20">
      <CircleAlert className="text-error text-[18px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <span className="font-label-md text-label-md text-on-surface block">3 records pending review</span>
      <a className="font-body-md text-body-md text-primary hover:underline mt-1 inline-block" href="#" data-action-id="review-now-4" onClick={(event) => { event.preventDefault(); actions?.["review-now-4"]?.(); }}>Review now →</a>
      </div>
      </div>
      <div className="flex items-start gap-3 p-2 bg-surface-container rounded-DEFAULT border border-outline-variant">
      <Info className="text-secondary text-[18px] mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <span className="font-label-md text-label-md text-on-surface block">System update tonight</span>
      <span className="font-body-md text-body-md text-secondary">Expect brief downtime at 02:00 Z.</span>
      </div>
      </div>
      </div>
      </div>
      {/* State Distribution Chart */}
      <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-4">
      <div className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4 border-b border-outline-variant pb-2 flex justify-between items-center">
      <span>State Distribution</span>
      <Ellipsis className="text-[16px] cursor-pointer hover:text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
      {/* Visual Bar */}
      <div className="h-4 w-full flex rounded-sm overflow-hidden flex-nowrap">
      <div className="h-full bg-primary" style={{width: "60%"}} title="Completed"></div>
      <div className="h-full bg-surface-tint opacity-60" style={{width: "25%"}} title="In Progress"></div>
      <div className="h-full bg-outline-variant" style={{width: "15%"}} title="Pending"></div>
      </div>
      {/* Legend */}
      <div className="flex gap-4 justify-between items-center mt-2">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-primary"></div>
      <span className="font-body-md text-body-md text-on-surface">Completed (60%)</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-surface-tint opacity-60"></div>
      <span className="font-body-md text-body-md text-on-surface">In Progress (25%)</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-outline-variant"></div>
      <span className="font-body-md text-body-md text-on-surface">Pending (15%)</span>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-4 flex flex-col h-full max-h-[300px]">
      <div className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4 border-b border-outline-variant pb-2">Recent Activity</div>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1">
      {/* Event */}
      <div className="flex gap-3">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
      <div className="w-px h-full bg-outline-variant my-1"></div>
      </div>
      <div className="pb-2">
      <div className="font-label-md text-label-md text-on-surface">Record #8992 approved</div>
      <div className="font-body-md text-body-md text-secondary mt-0.5">By System • 10m ago</div>
      </div>
      </div>
      {/* Event */}
      <div className="flex gap-3">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-surface-tint mt-1.5"></div>
      <div className="w-px h-full bg-outline-variant my-1"></div>
      </div>
      <div className="pb-2">
      <div className="font-label-md text-label-md text-on-surface">New batch uploaded</div>
      <div className="font-body-md text-body-md text-secondary mt-0.5">By J. Doe • 1h ago</div>
      </div>
      </div>
      {/* Event */}
      <div className="flex gap-3">
      <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-outline mt-1.5"></div>
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Daily summary generated</div>
      <div className="font-body-md text-body-md text-secondary mt-0.5">System • 4h ago</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center w-full px-container-padding py-2 border-t border-outline-variant bg-surface-container-lowest shrink-0">
      <span className="font-label-sm text-label-sm text-secondary">© 2024 Focus Pad Utility. System Status: Optimal.</span>
      <div className="flex gap-4">
      <a className="font-label-sm text-label-sm text-secondary hover:underline" href="#" data-action-id="documentation-5" onClick={(event) => { event.preventDefault(); actions?.["documentation-5"]?.(); }}>Documentation</a>
      <a className="font-label-sm text-label-sm text-secondary hover:underline" href="#" data-action-id="support-6" onClick={(event) => { event.preventDefault(); actions?.["support-6"]?.(); }}>Support</a>
      <a className="font-label-sm text-label-sm text-secondary hover:underline" href="#" data-action-id="privacy-7" onClick={(event) => { event.preventDefault(); actions?.["privacy-7"]?.(); }}>Privacy</a>
      </div>
      </footer>
      </div>
    </>
  );
}
