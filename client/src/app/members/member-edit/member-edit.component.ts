import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
  imports: [CommonModule, TabsModule, GalleryModule, FormsModule]
})
export class MemberEditComponent {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any){
    if(this.editForm?.dirty){
      $event.returnValue = true;
    }
  }
  member: Member | undefined;
  user: User | null = null;

  constructor(private accountService: AccountService, private memberService: MembersService,
    private toaster: ToastrService){
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

  updateMember() {
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: _ => {
        this.toaster.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      }
    })
  }
}












