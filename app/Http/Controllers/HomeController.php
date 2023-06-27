<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function sendMail(Request $request){
        Mail::to($request->email)->send(new SendMail($request->firstName, $request->lastname, $request->email));
        return redirect()->back()->with('success','Your request has been received');
    }
}
