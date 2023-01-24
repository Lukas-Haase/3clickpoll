import { LivepollTemplateLike, TemplateKind } from '../../app/models/livepoll/livepoll-template'

export const predefinedTemplates: Map<string, LivepollTemplateLike> = new Map( [
  [ 'mood', {
    kind: TemplateKind.Icon,
    icons: [
      'face',
      'face',
      'face',
      'face',
    ]
  } ],
  [ 'letters', {
    kind: TemplateKind.Text,
    symbols: [
      'A',
      'B',
      'C',
      'D',
    ]
  } ]
] )

// just had to write 'export', GitHub-Copilot suggested the rest
export const PredefinedTemplateNames: string[] = Array.from( predefinedTemplates.keys() )
