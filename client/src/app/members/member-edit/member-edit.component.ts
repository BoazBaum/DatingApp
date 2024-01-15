import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryModule } from 'ng-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
  imports: [CommonModule, TabsModule, GalleryModule]
})
export class MemberEditComponent {
  member: Member | undefined;
  user: User | null = null;

  constructor(private accountService: AccountService, private memberService: MembersService){
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
  }

  ngOnInit(): void{
    this.loadMember();
  }

  loadMember(){
    if(!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    })
  }
}











