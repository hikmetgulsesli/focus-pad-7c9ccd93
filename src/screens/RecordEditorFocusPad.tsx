// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, BarChart3, ChevronDown, CircleAlert, CircleUserRound, ListTodo, PackageSearch, Plus, Save, Settings, User } from "lucide-react";


export type RecordEditorFocusPadActionId = "new-record-1" | "back-2" | "cancel-3" | "save-4" | "close-5" | "close-6" | "records-1" | "insights-2" | "archive-3" | "documentation-4" | "support-5" | "privacy-6";

export interface RecordEditorFocusPadProps {
  actions?: Partial<Record<RecordEditorFocusPadActionId, () => void>>;

}

export function RecordEditorFocusPad({ actions }: RecordEditorFocusPadProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant dark:border-outline h-full w-panel-width-sm py-6 px-4 gap-stack-gap fixed left-0 top-0">
      <div className="mb-8">
      <h1 className="font-display text-headline-md text-primary dark:text-primary-fixed-dim">Focus Pad</h1>
      <p className="font-body-md text-body-md text-secondary">Utility Management</p>
      </div>
      <button className="bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded w-full flex items-center justify-center gap-2 mb-4 hover:bg-primary-container hover:text-on-primary-container transition-colors" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[20px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      <ul className="flex flex-col gap-2 flex-grow">
      {/* Records (Active) */}
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary dark:text-primary-fixed-dim font-bold bg-primary-container dark:bg-primary-container-highest font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <ListTodo  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
                          Records
                      </a>
      </li>
      {/* Insights (Inactive) */}
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary dark:text-secondary-fixed-dim font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      {/* Archive (Inactive) */}
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary dark:text-secondary-fixed-dim font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <PackageSearch className="text-[20px]" aria-hidden={true} focusable="false" />
                          Archive
                      </a>
      </li>
      </ul>
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
      <User className="text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface">Admin User</span>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[280px] h-full overflow-hidden bg-background">
      {/* TopNavBar (Mobile priority, desktop contextual) */}
      <header className="flex md:hidden justify-between items-center w-full px-container-padding h-12 max-w-full bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
      <div className="font-display text-display text-primary dark:text-primary-fixed-dim">Focus Pad</div>
      <div className="flex items-center gap-4">
      <Settings className="cursor-pointer hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors text-primary" aria-hidden={true} focusable="false" />
      <CircleUserRound className="cursor-pointer hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors text-primary" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Editor Toolbar (Sub-header) */}
      <div className="flex justify-between items-center px-container-padding py-4 border-b border-outline-variant bg-surface-container-lowest shrink-0">
      <div className="flex items-center gap-4">
      <button className="text-secondary hover:text-on-surface transition-colors flex items-center gap-1 font-label-md text-label-md" type="button" data-action-id="back-2" onClick={actions?.["back-2"]}>
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
                          Back
                      </button>
      <div className="h-4 w-px bg-outline-variant"></div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Edit Record</h2>
      </div>
      <div className="flex items-center gap-3">
      <span className="font-label-sm text-label-sm text-error flex items-center gap-1 hidden" id="unsaved-indicator">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                          Unsaved changes
                      </span>
      <button className="px-4 py-1.5 border border-outline text-on-surface font-label-md text-label-md rounded hover:bg-surface-container transition-colors" type="button" data-action-id="cancel-3" onClick={actions?.["cancel-3"]}>Cancel</button>
      <button className="px-4 py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-colors flex items-center gap-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" type="button" data-action-id="save-4" onClick={actions?.["save-4"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                          Save
                      </button>
      </div>
      </div>
      {/* Canvas (Scrollable) */}
      <main className="flex-1 overflow-y-auto p-container-padding">
      <div className="max-w-[768px] mx-auto bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-sm">
      <form className="flex flex-col gap-6">
      {/* Section: Core Details */}
      <div className="flex flex-col gap-4">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h3 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Core Details</h3>
      </div>
      {/* Title Field (Required) */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="record-title">
                                      Title <span className="text-error">*</span>
      </label>
      <input className="h-[32px] px-3 font-body-md text-body-md border border-outline-variant rounded bg-surface-container-lowest text-on-surface placeholder:text-outline form-input-focus transition-colors w-full" id="record-title" placeholder="Enter record title" required={true} type="text" defaultValue="Q3 Resource Allocation Analysis" />
      <span className="font-label-sm text-label-sm text-outline hidden">Please provide a descriptive title.</span>
      </div>
      {/* Category & Status Row */}
      <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-1.5 flex-1">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="record-category">Category</label>
      <div className="relative">
      <select className="h-[32px] px-3 pr-8 font-body-md text-body-md border border-outline-variant rounded bg-surface-container-lowest text-on-surface form-input-focus w-full appearance-none" id="record-category">
      <option selected={true} value="analysis">Analysis</option>
      <option value="report">Report</option>
      <option value="audit">Audit</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="record-status">Status</label>
      <div className="relative">
      <select className="h-[32px] px-3 pr-8 font-body-md text-body-md border border-outline-variant rounded bg-surface-container-lowest text-on-surface form-input-focus w-full appearance-none" id="record-status">
      <option value="draft">Draft</option>
      <option selected={true} value="review">In Review</option>
      <option value="approved">Approved</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Section: Content */}
      <div className="flex flex-col gap-4 mt-2">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h3 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Content</h3>
      </div>
      {/* Description Field */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="record-description">Description</label>
      <textarea className="p-3 font-body-md text-body-md border border-outline-variant rounded bg-surface-container-lowest text-on-surface placeholder:text-outline form-input-focus transition-colors w-full resize-y" id="record-description" placeholder="Detailed description of the record..." rows={5}>Comprehensive breakdown of resource allocation across departments for the third quarter, highlighting inefficiencies in the logistics sector.</textarea>
      </div>
      </div>
      {/* Section: Metadata */}
      <div className="flex flex-col gap-4 mt-2">
      <div className="border-b border-outline-variant pb-2 mb-2">
      <h3 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Metadata</h3>
      </div>
      {/* Tags */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface">Tags</label>
      <div className="flex flex-wrap gap-2 items-center p-2 border border-outline-variant rounded min-h-[40px] bg-surface-container-lowest">
      <span className="inline-flex items-center gap-1 px-2 h-[20px] bg-primary-fixed text-on-primary-fixed rounded font-label-sm text-label-sm">
                                          Q3
                                          <button className="material-symbols-outlined text-[12px] hover:text-error transition-colors" type="button" data-action-id="close-5" onClick={actions?.["close-5"]}>close</button>
      </span>
      <span className="inline-flex items-center gap-1 px-2 h-[20px] bg-secondary-container text-on-secondary-container rounded font-label-sm text-label-sm">
                                          Logistics
                                          <button className="material-symbols-outlined text-[12px] hover:text-error transition-colors" type="button" data-action-id="close-6" onClick={actions?.["close-6"]}>close</button>
      </span>
      <input className="flex-1 min-w-[100px] bg-transparent border-none p-0 h-[24px] font-body-md text-body-md focus:ring-0 text-on-surface placeholder:text-outline" placeholder="Add tag..." type="text" />
      </div>
      </div>
      </div>
      </form>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center w-full px-container-padding py-2 border-t border-outline-variant dark:border-outline bg-surface-container-lowest dark:bg-surface-dim shrink-0 z-50">
      <span className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim">© 2024 Focus Pad Utility. System Status: Optimal.</span>
      <div className="flex gap-4">
      <a className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim hover:underline transition-colors" href="#" data-action-id="documentation-4" onClick={(event) => { event.preventDefault(); actions?.["documentation-4"]?.(); }}>Documentation</a>
      <a className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim hover:underline transition-colors" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>Support</a>
      <a className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim hover:underline transition-colors" href="#" data-action-id="privacy-6" onClick={(event) => { event.preventDefault(); actions?.["privacy-6"]?.(); }}>Privacy</a>
      </div>
      </footer>
      </div>
    </>
  );
}
