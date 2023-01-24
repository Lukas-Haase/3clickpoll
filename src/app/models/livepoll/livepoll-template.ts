import { TypeGuard } from '../../pipes/type-guard'

export enum TemplateKind {
  Icon,
  Text,
}

export interface LivepollTemplate<E extends TemplateKind> {
  kind: E
}

export interface LivepollIconTemplate extends LivepollTemplate<TemplateKind.Icon> {
  kind: TemplateKind.Icon
  icons: string[]
}

export interface LivepollTextTemplate extends LivepollTemplate<TemplateKind.Text> {
  kind: TemplateKind.Text
  symbols: string[]
}

export type LivepollTemplateLike = LivepollIconTemplate | LivepollTextTemplate

export type VisitTemplateLikeTypeGuard = { [Template in LivepollTemplateLike as Template['kind']]: TypeGuard<LivepollTemplateLike, Template> }

// GitHub-Copilot suggested this from the snippet above
export const visitTemplateLikeTypeGuard: VisitTemplateLikeTypeGuard = {
  [ TemplateKind.Icon ]: ( template ): template is LivepollIconTemplate => template.kind === TemplateKind.Icon,
  [ TemplateKind.Text ]: ( template ): template is LivepollTextTemplate => template.kind === TemplateKind.Text
}
