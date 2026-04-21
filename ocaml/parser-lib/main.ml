
(*Read lines that gathers all lines in a list*)
  let read_lines name : string list =
    let ic = open_in name in
    let try_read () = 
      try Some (input_line ic) with End_of_file -> None in
    let rec loop acc = match try_read () with
      | Some s -> loop (s :: acc)
      | None -> close_in ic; List.rev acc in
    loop []

  let lines = read_lines "test.txt"

(*read_lines that processes each line*)

let read_processed_lines process =
  let in_channel = open_in file in
  let rec read_line() = 
    let line = try input_line in_channel with End_of_file -> exit 0
    in process line; read_line(); in read_line()


read_lines "test.txt" print_endline

(* Gonna try something *)

(* read the entire file *)
let read_file file =
  In_channel.with_open_bin file In_channel.input_all

(* read lines *)
let read_lines file =
  let contents = In_channel.with_open_bin file In_channel.input_all in
  String.split_on_char '\n' contents

List.iter print_endline (read_lines filename)
