import './App.css';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ AllCommunityModule ]);

const htmlCategories = [
  {
    category: 'Main (root)',
    elements: [
      { tag: 'html', description: 'Root element of an HTML document.' },
      { tag: 'head', description: 'Contains meta-information about the document.' },
      { tag: 'body', description: 'Contains visible page content.' },
    ],
  },
  {
    category: 'Metadata and management',
    elements: [
      { tag: 'base', description: 'Specifies the base URL for relative URLs.' },
      { tag: 'link', description: 'Defines a relationship to an external resource.' },
      { tag: 'meta', description: 'Provides metadata like charset, author.' },
      { tag: 'style', description: 'Contains internal CSS.' },
      { tag: 'title', description: 'Sets the document title in the browser tab.' },
    ],
  },
  {
    category: 'Document section',
    elements: [
      { tag: 'header', description: 'Document or section header.' },
      { tag: 'nav', description: 'Navigation links.' },
      { tag: 'main', description: 'Main content of the page.' },
      { tag: 'section', description: 'Generic section of a document.' },
      { tag: 'article', description: 'Self-contained content (e.g., blog post).' },
      { tag: 'aside', description: 'Sidebar or tangential content.' },
      { tag: 'footer', description: 'Footer for a section/document.' },
      { tag: 'address', description: 'Contact info for the document or author.' },
    ],
  },
  {
    category: 'Textual and semantic',
    elements: [
      { tag: 'h1 - h6', description: 'Headings, from most to least important.' },
      { tag: 'p', description: 'Paragraph.' },
      { tag: 'hr', description: 'Horizontal rule (line).' },
      { tag: 'pre', description: 'Preformatted text.' },
      { tag: 'blockquote', description: 'Quoted section.' },
      { tag: 'ol', description: 'Ordered list.' },
      { tag: 'ul', description: 'Unordered list.' },
      { tag: 'li', description: 'List item.' },
      { tag: 'dl', description: 'Description list.' },
      { tag: 'dt', description: 'Term in a description list.' },
      { tag: 'dd', description: 'Description for the term.' },
      { tag: 'figure', description: 'Self-contained content like images.' },
      { tag: 'figcaption', description: 'Caption for a figure.' },
      { tag: 'div', description: 'Generic block container.' },
    ],
  },
  {
    category: 'Inline text',
    elements: [
      { tag: 'a', description: 'Hyperlink.' },
      { tag: 'abbr', description: 'Abbreviation.' },
      { tag: 'b', description: 'Bold text.' },
      { tag: 'bdi', description: 'Bi-directional isolation.' },
      { tag: 'br', description: 'Line break.' },
      { tag: 'cite', description: 'Citation of a source.' },
      { tag: 'code', description: 'Code snippet.' },
      { tag: 'data', description: 'Machine-readable value.' },
      { tag: 'dfn', description: 'Term being defined.' },
      { tag: 'em', description: 'Emphasized text.' },
      { tag: 'i', description: 'Italic text.' },
      { tag: 'kbd', description: 'Keyboard input.' },
      { tag: 'mark', description: 'Highlighted text.' },
      { tag: 'q', description: 'Inline quotation.' },
      { tag: 'rp', description: 'Fallback for ruby.' },
      { tag: 'rt', description: 'Ruby pronunciation.' },
      { tag: 'ruby', description: 'Ruby annotation.' },
      { tag: 's', description: ' Strikethrough (no longer valid).' },
      { tag: 'samp', description: 'Sample output.' },
      { tag: 'small', description: 'Smaller text.' },
      { tag: 'span', description: 'Generic inline container.' },
      { tag: 'strong', description: 'Important text.' },
      { tag: 'sub', description: 'Subscript text.' },
      { tag: 'sup', description: 'Superscript text.' },
      { tag: 'time', description: 'Machine-readable time/date.' },
      { tag: 'u', description: 'Underlined text.' },
      { tag: 'var', description: 'Variable in code.' },
      { tag: 'wbr', description: 'Word break opportunity.' },
    ],
  },
  {
    category: 'Media',
    elements: [
      { tag: 'img', description: 'Image.' },
      { tag: 'audio', description: 'Audio content.' },
      { tag: 'video', description: 'Video content.' },
      { tag: 'source', description: 'Source for media.' },
      { tag: 'track', description: 'Text tracks (subtitles).' },
      { tag: 'map', description: 'Image map container.' },
      { tag: 'area', description: 'Clickable area inside an image map.' },
      { tag: 'picture', description: 'Responsive image container.' },
      { tag: 'canvas', description: 'Scriptable graphics area.' },
      { tag: 'svg', description: 'Embedded vector graphics.' },
    ],
  },
  {
    category: 'Forms',
    elements: [
      { tag: 'form', description: 'Form container.' },
      { tag: 'input', description: 'Input field.' },
      { tag: 'textarea', description: 'Multiline text input.' },
      { tag: 'button', description: 'Clickable button.' },
      { tag: 'select', description: 'Dropdown menu.' },
      { tag: 'option', description: 'Option in dropdown.' },
      { tag: 'optgroup', description: 'Group of options.' },
      { tag: 'label', description: 'Label for form element.' },
      { tag: 'fieldset', description: 'Group related fields.' },
      { tag: 'legend', description: 'Caption for a fieldset.' },
      { tag: 'datalist', description: 'Autocomplete options.' },
      { tag: 'output', description: 'Calculation result.' },
      { tag: 'meter', description: 'Scalar measurement.' },
      { tag: 'progress', description: 'Task progress indicator.' },
    ],
  },
  {
    category: 'Tables',
    elements: [
      { tag: 'table', description: 'Table container.' },
      { tag: 'caption', description: 'Table caption.' },
      { tag: 'thead', description: 'Header row group.' },
      { tag: 'tbody', description: 'Body row group.' },
      { tag: 'tfoot', description: 'Footer row group.' },
      { tag: 'tr', description: 'Table row.' },
      { tag: 'th', description: 'Header cell.' },
      { tag: 'td', description: 'Table data cell.' },
    ],
  },
  {
    category: 'Scenarios and interaction',
    elements: [
      { tag: 'script', description: 'Client-side script (JS).' },
      { tag: 'noscript', description: 'Fallback for disabled scripts.' },
      { tag: 'template', description: 'HTML template (not rendered).' },
      { tag: 'slot', description: 'Web component placeholder.' },
      { tag: 'canvas', description: 'Drawable region (for JS graphics).' },
      { tag: 'dialog', description: 'Dialog box.' },
      { tag: 'details', description: 'Expandable content.' },
      { tag: 'summary', description: 'Summary for <details>.' },
    ],
  },
  {
    category: 'Framing and enbedding',
    elements: [
      { tag: 'iframe', description: 'Embedded HTML page.' },
      { tag: 'embed', description: 'External resource.' },
      { tag: 'object', description: 'Embedded object (e.g., plugin).' },
      { tag: 'param', description: 'Parameter for <object>.' },
    ],
  },
]

function App() {
  const rowData = useMemo(
    () =>
      htmlCategories.flatMap(cat =>
        cat.elements.map(el => ({
          tag: el.tag,
          description: el.description,
          category: cat.category
        }))
      ),
    []
  )

  const columnDefs = useMemo(() => [
    { headerName: 'Tag', field: 'tag', filter: true, sortable: true, maxWidth: 100 },
    { headerName: 'Category', field: 'category', filter: true, sortable: true },
    { headerName: 'Description', field: 'description', flex: 1, filter: true }
  ], [])

  return (
    <div style={{ width: '120%', height: '100vh', padding: '1rem' }}>
      <h1>HTML Documentation</h1>
      <div className="ag-theme-material" style={{ height: '500px', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
            wrapText: true,
            autoHeight: true
          }}
        />
      </div>
    </div>
  )
}

export default App
