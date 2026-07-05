// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeAlert, BadgeHelp, BarChart3, CalendarDays, CircleUserRound, ListFilter, ListTodo, Minus, PackageSearch, Pencil, Plus, RefreshCw, Search, Settings, TriangleAlert, User, X } from "lucide-react";


export type RecordOperationsFocusPadActionId = "new-record-1" | "settings-2" | "account-circle-3" | "filter-4" | "last-30-days-5" | "refresh-6" | "edit-7" | "edit-8" | "edit-9" | "edit-10" | "edit-11" | "close-12" | "assign-13" | "complete-14" | "retry-15" | "records-1" | "insights-2" | "archive-3" | "operations-4" | "insights-5" | "documentation-6" | "support-7";

export interface RecordOperationsFocusPadProps {
  actions?: Partial<Record<RecordOperationsFocusPadActionId, () => void>>;

}

export function RecordOperationsFocusPad({ actions }: RecordOperationsFocusPadProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant dark:border-outline docked fixed left-0 h-full w-panel-width-sm flex flex-col h-full py-6 px-4 gap-stack-gap z-20">
      <div className="mb-8 px-2 flex items-center gap-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-display text-headline-md text-primary dark:text-primary-fixed-dim m-0">Focus Pad</h1>
      <p className="font-label-sm text-label-sm text-secondary m-0">Utility Management</p>
      </div>
      </div>
      <button className="bg-primary text-on-primary font-label-md text-label-md w-full py-2 px-4 rounded-DEFAULT flex items-center justify-center gap-2 mb-6 hover:opacity-90 transition-opacity" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 text-primary dark:text-primary-fixed-dim font-bold bg-primary-container dark:bg-primary-container-highest rounded-lg transition-colors duration-200 ease-in-out" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <ListTodo  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Records</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-lg transition-colors duration-200 ease-in-out" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <PackageSearch className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Archive</span>
      </a>
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-4 px-2">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
      <User className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <p className="font-label-md text-label-md m-0">User Profile</p>
      </div>
      </div>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col ml-[280px] h-screen relative">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline docked full-width top-0 flex justify-between items-center w-full px-container-padding h-12 max-w-full z-10 shrink-0">
      <div className="flex-1 max-w-md">
      <div className="relative flex items-center w-full">
      <Search className="absolute left-2 text-secondary text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 bg-surface-container border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search records..." type="text" />
      </div>
      </div>
      <nav className="flex items-center h-full ml-6 hidden md:flex">
      <a className="flex items-center h-full px-4 text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="operations-4" onClick={(event) => { event.preventDefault(); actions?.["operations-4"]?.(); }}>
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center h-full px-4 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 transition-opacity" href="#" data-action-id="insights-5" onClick={(event) => { event.preventDefault(); actions?.["insights-5"]?.(); }}>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="flex items-center gap-2 ml-auto">
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Account Circle" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas */}
      <div className="flex-1 overflow-auto bg-background p-container-padding flex flex-col gap-6">
      {/* Header & Metrics */}
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
      <div>
      <h2 className="font-display text-display m-0">Record Operations</h2>
      <p className="font-body-md text-body-md text-secondary m-0 mt-1">Manage and track utility workflows.</p>
      </div>
      </div>
      {/* Bento Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">Total Records</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-md text-[28px] font-semibold">1,248</span>
      <span className="font-label-sm text-label-sm text-surface-tint flex items-center"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 12%</span>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">Active Workflows</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-md text-[28px] font-semibold">342</span>
      <span className="font-label-sm text-label-sm text-outline flex items-center"><Minus className="text-[14px]" aria-hidden={true} focusable="false" /> 0%</span>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2">Pending Review</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-md text-[28px] font-semibold text-error">18</span>
      <span className="font-label-sm text-label-sm text-error flex items-center"><BadgeAlert className="text-[14px]" aria-hidden={true} focusable="false" /> Urgent</span>
      </div>
      </div>
      </div>
      </div>
      {/* Content Area (Filters + Table + Preview) */}
      <div className="flex-1 flex gap-6 min-h-0">
      {/* Main List Section */}
      <div className="flex-1 flex flex-col bg-surface border border-outline-variant rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="h-12 border-b border-outline-variant px-4 flex items-center justify-between shrink-0 bg-surface-bright">
      <div className="flex items-center gap-2">
      <button className="h-8 px-3 border border-outline-variant rounded-DEFAULT text-secondary hover:bg-surface-container flex items-center gap-2 transition-colors" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Filter</span>
      </button>
      <button className="h-8 px-3 border border-outline-variant rounded-DEFAULT text-secondary hover:bg-surface-container flex items-center gap-2 transition-colors" type="button" data-action-id="last-30-days-5" onClick={actions?.["last-30-days-5"]}>
      <CalendarDays className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Last 30 Days</span>
      </button>
      </div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Refresh" data-action-id="refresh-6" onClick={actions?.["refresh-6"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Table */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
      <tr>
      <th className="px-4 py-2 font-label-sm text-label-sm text-secondary font-semibold w-24">ID</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-secondary font-semibold">Title</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-secondary font-semibold w-32">Status</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-secondary font-semibold w-40">Last Updated</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-secondary font-semibold w-16 text-right">Action</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md">
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest cursor-pointer bg-primary-fixed/30">
      <td className="px-4 py-3 font-mono-md text-mono-md text-secondary">REC-001</td>
      <td className="px-4 py-3 font-medium text-on-surface">Annual Compliance Review</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-primary-container text-on-primary-container font-label-sm text-label-sm">In Progress</span>
      </td>
      <td className="px-4 py-3 text-secondary">2 hours ago</td>
      <td className="px-4 py-3 text-right">
      <button className="text-primary hover:text-primary-container transition-colors" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest cursor-pointer">
      <td className="px-4 py-3 font-mono-md text-mono-md text-secondary">REC-002</td>
      <td className="px-4 py-3 font-medium text-on-surface">Facility Maintenance Q3</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Completed</span>
      </td>
      <td className="px-4 py-3 text-secondary">Yesterday</td>
      <td className="px-4 py-3 text-right">
      <button className="text-secondary hover:text-primary transition-colors" type="button" aria-label="Edit" data-action-id="edit-8" onClick={actions?.["edit-8"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest cursor-pointer">
      <td className="px-4 py-3 font-mono-md text-mono-md text-secondary">REC-003</td>
      <td className="px-4 py-3 font-medium text-on-surface">Vendor Contract Renewal</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-error-container text-on-error-container font-label-sm text-label-sm">Pending</span>
      </td>
      <td className="px-4 py-3 text-secondary">Oct 12, 2023</td>
      <td className="px-4 py-3 text-right">
      <button className="text-secondary hover:text-primary transition-colors" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest cursor-pointer">
      <td className="px-4 py-3 font-mono-md text-mono-md text-secondary">REC-004</td>
      <td className="px-4 py-3 font-medium text-on-surface">System Upgrade Validation</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Completed</span>
      </td>
      <td className="px-4 py-3 text-secondary">Oct 10, 2023</td>
      <td className="px-4 py-3 text-right">
      <button className="text-secondary hover:text-primary transition-colors" type="button" aria-label="Edit" data-action-id="edit-10" onClick={actions?.["edit-10"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-lowest cursor-pointer">
      <td className="px-4 py-3 font-mono-md text-mono-md text-secondary">REC-005</td>
      <td className="px-4 py-3 font-medium text-on-surface">Security Audit Q4</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-primary-container text-on-primary-container font-label-sm text-label-sm">In Progress</span>
      </td>
      <td className="px-4 py-3 text-secondary">Oct 08, 2023</td>
      <td className="px-4 py-3 text-right">
      <button className="text-secondary hover:text-primary transition-colors" type="button" aria-label="Edit" data-action-id="edit-11" onClick={actions?.["edit-11"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Preview Panel (Right Side) */}
      <div className="w-panel-width-md bg-surface border border-outline-variant rounded-lg flex flex-col shrink-0 overflow-hidden hidden lg:flex">
      <div className="h-12 border-b border-outline-variant px-4 flex items-center justify-between bg-surface-bright shrink-0">
      <h3 className="font-label-md text-label-md font-semibold m-0">Record Details</h3>
      <button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Close" data-action-id="close-12" onClick={actions?.["close-12"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col gap-6">
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="font-mono-md text-mono-md text-secondary">REC-001</span>
      <span className="inline-flex items-center px-2 h-5 rounded-sm bg-primary-container text-on-primary-container font-label-sm text-label-sm">In Progress</span>
      </div>
      <h2 className="font-headline-md text-headline-md m-0">Annual Compliance Review</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
      <span className="block font-label-sm text-label-sm text-secondary mb-1">Assigned To</span>
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">JD</div>
      <span className="font-body-md text-body-md">John Doe</span>
      </div>
      </div>
      <div>
      <span className="block font-label-sm text-label-sm text-secondary mb-1">Due Date</span>
      <span className="font-body-md text-body-md">Nov 15, 2023</span>
      </div>
      </div>
      <div className="border-t border-outline-variant pt-4">
      <span className="block font-label-sm text-label-sm text-secondary mb-2">Description</span>
      <p className="font-body-md text-body-md text-on-surface-variant m-0 leading-relaxed">
                                      Comprehensive review of all internal compliance protocols to ensure alignment with recent regulatory updates. Requires coordination across Legal and Operations departments.
                                  </p>
      </div>
      <div className="border-t border-outline-variant pt-4 mt-auto">
      <div className="flex gap-2">
      <button className="flex-1 h-8 bg-surface-bright border border-outline-variant rounded-DEFAULT font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" type="button" data-action-id="assign-13" onClick={actions?.["assign-13"]}>Assign</button>
      <button className="flex-1 h-8 bg-primary border border-transparent rounded-DEFAULT font-label-md text-label-md text-on-primary hover:opacity-90 transition-opacity" type="button" data-action-id="complete-14" onClick={actions?.["complete-14"]}>Complete</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Footer / Error State Simulation Area */}
      <footer className="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant dark:border-outline docked full-width bottom-0 flex justify-between items-center w-full px-container-padding py-2 z-50 shrink-0">
      <p className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim m-0">© 2024 Focus Pad Utility. System Status: Optimal.</p>
      <div className="flex items-center gap-4">
      {/* Example of an inline error state / retry */}
      <div className="flex items-center gap-2 bg-error-container/20 px-2 py-1 rounded text-error">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Sync failed 2 mins ago</span>
      <button className="ml-2 font-label-sm text-label-sm underline hover:opacity-80" type="button" data-action-id="retry-15" onClick={actions?.["retry-15"]}>Retry</button>
      </div>
      <nav className="flex gap-4">
      <a className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim hover:underline transition-colors" href="#" data-action-id="documentation-6" onClick={(event) => { event.preventDefault(); actions?.["documentation-6"]?.(); }}>Documentation</a>
      <a className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim hover:underline transition-colors" href="#" data-action-id="support-7" onClick={(event) => { event.preventDefault(); actions?.["support-7"]?.(); }}>Support</a>
      </nav>
      </div>
      </footer>
      </main>
    </>
  );
}
