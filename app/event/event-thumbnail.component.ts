import { Component , Input} from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'app/event/event-thumbnail.component.html',

})
export class EventThumbnailComponent {
  @Input() event:any
}
