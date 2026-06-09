import type {ReactElement} from "react"

import {Link} from "react-router"

import {Tag} from "@qualcomm-ui/react/tag"

export function TagVariantsDemo(): ReactElement {
  return (
    <div className="flex flex-col items-start gap-2">
      {/* preview */}
      <Tag>read-only</Tag>
      <Tag variant="dismissable">dismissable</Tag>
      <Tag variant="selectable">selectable</Tag>
      <Tag render={<Link to="/components/tag" />}>link</Tag>
      {/* preview */}
    </div>
  )
}
