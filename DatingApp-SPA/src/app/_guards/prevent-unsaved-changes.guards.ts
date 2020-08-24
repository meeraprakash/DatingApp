import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';
import { Injectable, Component } from '@angular/core';


@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(Component:MemberEditComponent){
        if(Component.editForm.dirty){
            return confirm('Are you want to continue? Any unsaved changes will be lost');
        }
        return true;
        }
    }
