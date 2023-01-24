import { Component, OnInit } from '@angular/core'
import { PredefinedTemplateNames, predefinedTemplates } from '../../../assets/livepoll/livepoll-predefined-templates'
import {
  LivepollTemplateLike,
  TemplateKind,
  VisitTemplateLikeTypeGuard,
  visitTemplateLikeTypeGuard
} from '../../models/livepoll/livepoll-template'

@Component( {
  selector: 'app-create-livepoll',
  templateUrl: './create-livepoll.component.html',
  styleUrls: [ './create-livepoll.component.scss' ]
} )
export class CreateLivepollComponent implements OnInit {

  public readonly TemplateKind = TemplateKind
  public readonly templateGuard: VisitTemplateLikeTypeGuard = visitTemplateLikeTypeGuard
  public readonly predefinedTemplateNames: string[] = PredefinedTemplateNames
  public currentTemplate: {
    name: string,
    template: LivepollTemplateLike
  } | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

  setTemplate( name: string ) {
    const template = predefinedTemplates.get( name )
    if ( template ) {
      this.currentTemplate = {
        name: name,
        template: template
      }
    }
  }
}
