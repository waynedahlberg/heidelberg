import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import {
  Sidenote,
  MarginNote,
  Epigraph,
  QuoteSource,
  PullQuote,
  Blockquote,
  Newthought,
  SectionBreak,
  Verse,
  Figure,
  SmallCaps,
} from "@/components/typography";
import {
  DemoButtons,
  DemoBadgeTooltip,
  DemoThinking,
  DemoAccordionCivility,
  DemoSwitchCivility,
  DemoSliderEconomy,
  DemoTableEconomy,
  DemoRadioSelection,
  DemoCheckboxStruggle,
  DemoSelectTabs,
  DemoDialogDropdown,
  DemoInputSong,
  DemoRecapControls,
  DemoAskQuestions,
  DemoChatComposer,
  DemoColorRubric,
  DemoInputCopyCite,
  DemoMobileDrawerNav,
  DemoScrollCatalogue,
  DemoSegmentedTabs,
  DemoThinkingSteps,
  DemoFileMark,
} from "@/components/demos";

/**
 * The components available inside every MDX essay. Plain markdown maps to
 * the typeset defaults (styling lives in globals.css under .typeset);
 * the typographic set and Fluid Functionalism demos are in scope without imports.
 */
export const mdxComponents: MDXComponents = {
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
  hr: () => <SectionBreak />,

  Sidenote,
  MarginNote,
  Epigraph,
  QuoteSource,
  PullQuote,
  Blockquote,
  Newthought,
  SectionBreak,
  Verse,
  Figure,
  SmallCaps,

  DemoButtons,
  DemoBadgeTooltip,
  DemoThinking,
  DemoAccordionCivility,
  DemoSwitchCivility,
  DemoSliderEconomy,
  DemoTableEconomy,
  DemoRadioSelection,
  DemoCheckboxStruggle,
  DemoSelectTabs,
  DemoDialogDropdown,
  DemoInputSong,
  DemoRecapControls,
  DemoAskQuestions,
  DemoChatComposer,
  DemoColorRubric,
  DemoInputCopyCite,
  DemoMobileDrawerNav,
  DemoScrollCatalogue,
  DemoSegmentedTabs,
  DemoThinkingSteps,
  DemoFileMark,
};
